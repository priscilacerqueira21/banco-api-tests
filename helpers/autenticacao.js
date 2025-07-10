const request = require("supertest")

const obterToken =  async (usuario, senha) => {
  const responseLogin = await request(process.env.BASE_URL)
    .post("/login")
    .set("Content-Type", "application/json")
    .send({
      'username': usuario,
      'senha': senha,
    });
  
    return token = responseLogin.body.token
}

module.exports = {
  obterToken
}