const request = require('supertest')
const { expect } = require('chai')


describe('Login', () => {
  describe('POST /login', () => {
    it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {
      const response = await request('http://localhost:3000')
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
          'username': 'julio.lima',
          'senha': '123456'
        })
      
      // console.log(response.status)
      // console.log(response.body)

      expect(response.status).to.equal(200);
      expect(response.body.token).to.be.a('string');

    })

  })
})