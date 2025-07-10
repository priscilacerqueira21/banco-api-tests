const request = require("supertest");
const { expect } = require("chai");
require("dotenv").config();
const postLogin = require("../fixtures/postLogin.json");

describe("Login", () => {
  describe("POST /login", () => {
    it("Deve retornar 200 com token em string quando usar credenciais válidas", async () => {
      const bodyLogin = { ...postLogin };
      const response = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send(postLogin);

      expect(response.status).to.equal(200);
      expect(response.body.token).to.be.a("string");
    });
  });
});
