const api = require('../../app/api')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.should()
chai.use(chaiAsPromised)

describe('api#registerUser', () => {

  beforeEach(() => {})

  it('create user', () => {
    let params = {
      user: {
        email: 'demo@mail.com',
        password: '123123',
      }
    }

    let promise = api.call('registerUser', params)

    return promise.should.eventually.have.property('id')
    // promise.should.eventually.have.property('email')

    // return api.call('registerUser', params).should.eventually.have.property('id')
  })

})

console.log(process.env.NODE_ENV)