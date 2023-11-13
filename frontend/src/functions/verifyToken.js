import { api } from "./api"

export async function verifyToken(){
    const storedToken = JSON.parse(localStorage.getItem('token'))
    if(!storedToken){
        window.location.href = '/'
    }
    
    try {
        const data = await api.post('/users/verify-token', {
            token: storedToken
        })
        .then(response => {return response.data});

    } catch(e) {
        alert(err.response.data.message)
        window.location.href = '/'
    }
}