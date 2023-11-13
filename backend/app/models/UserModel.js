const { uuid } = require('uuidv4')

class UserModel {
    constructor(id, user_name, senha) {
      this.id = id;
      this.user_name = user_name;
      this.password = senha;
      this.pokemons = [];
      this.token = uuid()
    }
  }
  
module.exports = UserModel;