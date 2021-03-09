const request = require('supertest')
const app = require('../index.js')

describe('get endpoint', () => {
  it('should return get', async () => {
    const res = await request(app)
      .get('/')
      

    expect(res.body.mes).toEqual('It works')
  })
})

describe('post endpoint', () => {
    it('should return post', async () => {
      const res = await request(app)
        .post('/')
        

      expect(res.body.mes).toEqual('POST')
    })
  })

  describe('put endpoint', () => {
    it('should return patch', async () => {
      const res = await request(app)
        .put('/')
        
 
      expect(res.body.mes).toEqual('PUT')
    })
  })
  describe('delete endpoint', () => {
    it('should return patch', async () => {
      const res = await request(app)
        .delete('/')
        

      expect(res.body.mes).toEqual('DELETE')
    })
  })