import { api } from "./api"
import axios from "axios";
import { Navigate } from "react-router-dom";

export async function login(e, username, password){
    e.preventDefault()
    let message = "Login realizado com sucesso"

    try {
        const data = await axios.post('http://localhost:3000/users/login', {
            username: username,
            password: password
        })
            // data: { username, password }
        .then(response => {return response.data});

        localStorage.setItem('token', JSON.stringify(data))
        localStorage.setItem('userValues', JSON.stringify([]))
        window.location.href = '/mapa'
    }catch(err){
        // message = err.response.data.message;
        message = err;
        alert(err.response.data.message)
    }

}