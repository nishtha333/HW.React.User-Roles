const expect = require('chai').expect;
const db = require('../db');
const { User, Department } = db.Models;

describe('Models', () => {
    beforeEach(() => {
        return db.sync()
                 .then(() => db.seed());
    });
    it("There are 3 Departments", () => {
        return Department.findAll()
                         .then(depts => {
                             expect(depts.length).to.equal(3);
                         })
    })
    it("There are 2 users in Admin", () => {
        return Department.findOne({where: {name: "Admin"}})
                         .then(dept => {
                             return User.findAll({ where: {departmentId: dept.id}, include: [Department]})
                         }).then( users => {
                             expect(users.length).to.equal(2);
                         })
    })
})
