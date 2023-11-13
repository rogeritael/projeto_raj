const { Router } = require('express')

const PokemonController = require('../controllers/PokemonController')
const UserController = require('../controllers/UserController')

const router = Router();

router.get('/pokemons', PokemonController.index)
router.get('/pokemons/:id', PokemonController.show)
router.post('/users/login', UserController.login)
router.post('/users/verify-token', UserController.validateToken)
// router.post('/users/logout', UserController.logout)
// router.post('/users/catch', UserController.catchPokemon)

module.exports = router 