const request = require('supertest');
require('dotenv').config()

const obterToken = async (usuario, senha) => {
    //Capturar o token
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            'username': usuario,
            'senha': senha
        })
    return respostaLogin.body.token
}

module.exports = {
    obterToken
}