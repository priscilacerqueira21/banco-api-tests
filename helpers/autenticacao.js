const request = require("supertest")
const postLogin = require("../fixtures/postLogin.json");


const obterToken =  async (usuario, senha) => {
  const bodyLogin = { ...postLogin };
  const responseLogin = await request(process.env.BASE_URL)
    .post("/login")
    .set("Content-Type", "application/json")
    .send(bodyLogin);
  
    return token = responseLogin.body.token
}

module.exports = {
  obterToken
}