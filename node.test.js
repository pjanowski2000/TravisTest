const request = require('supertest')
const app = require('./index.js')

describe('get endpoint', () => {
  it('should return get', async () => {
    const res = await request(app)
      .get('/')
      

    expect(res.body.data).toEqual('It works')
  })
})

describe('post endpoint', () => {
    it('should return post', async () => {
      const res = await request(app)
        .post('/')
        

      expect(res.body.data).toEqual('POST')
    })
  })

  describe('put endpoint', () => {
    it('should return put', async () => {
      const res = await request(app)
        .put('/')
        
 
      expect(res.body.data).toEqual('PUT')
    })
  })
  describe('delete endpoint', () => {
    it('should return delete', async () => {
      const res = await request(app)
        .delete('/')
        

      expect(res.body.data).toEqual('DELETE')
    })
  })