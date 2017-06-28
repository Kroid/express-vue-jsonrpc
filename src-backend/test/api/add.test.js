const api = require('../../app/api')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')//.should()

chai.should()
chai.use(chaiAsPromised)

describe('api#add', () => {
  it('return sum of numbers', () => {
    let numbers = [1,2,3,4,5]
    let result = 1+2+3+4+5

    return api.call('add', numbers).should.eventually.equal(result)
  })
})
