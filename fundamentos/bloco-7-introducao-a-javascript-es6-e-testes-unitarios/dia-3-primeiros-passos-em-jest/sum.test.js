
const { expect } = require('@jest/globals');
const sum = require('./sum.js');

describe('1- testa a função sum', ()=>{
    it('teste se o retorno de (4,5) é 9', ()=>{
        expect(sum(4,5)).toBe(9)
    })
    it('teste se o retorno de (0,0) é 0', ()=>{
        expect(sum(0,0)).toBe(0)
    })
    it('teste se o retorno em caso de envio de string', ()=>{
        expect(sum(4,"5")).toThrowError();
        
    })

})