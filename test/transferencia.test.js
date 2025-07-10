const request = require("supertest")
const { expect } = require("chai")
require('dotenv').config()
const { obterToken} = require('../helpers/autenticacao')


describe("Transferências", () => {
  describe("POST /transferencias", () => {
    it("Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00", async () => {
      // Capturar o token
      const token =  await obterToken('julio.lima', '123456')

      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        // Antes do send, declarando o header
        .set("Authorization", `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 11,
          token: "",
        });

      expect(response.status).to.equal(201);
      console.log(response.body);
    });

    it("Deve retornar falha com 422 quando o valor da transferência for abaixo de R$ 10,00", async () => {
      const token =  await obterToken('julio.lima', '123456')

      const response = await request(process.env.BASE_URL)
      .post('/transferencias')
      .set('Content-Type', 'application/json')
      .set("Authorization", `Bearer ${token}`)
      .send({
          'contaOrigem': 1,
          'contaDestino': 2,
          'valor': 5,
          'token': ''
      })
      expect(response.status).to.equal(422);
      console.log(response.body)
    });
  });
});
