process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('./server');

chai.use(chaiHttp);

describe('Get Array',()=>{
    it('should get the array ', (done)=>{
        chai.request(server).get('/getAllData').end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
});