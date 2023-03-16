
import { expect, test, describe, vi } from 'vitest'
import {validateCedula, validateName, validateData, validateIfCedulaOrEmailNotExist, validateIfCedulaExist} from '../middlewares/students.validateData'


describe('validateCedula testing', () => {

    test('cédula with length lower than 8 and greather than 10 FAIL', () => {
        expect(validateCedula('111111111111')).toBe(false)
        expect(validateCedula('2442424252525')).toBe(false)
        expect(validateCedula('2323223')).toBe(false)
        expect(validateCedula('1234567890')).toBe(true)
        expect(validateCedula('12345678')).toBe(true)
        expect(validateCedula('')).toBe(false)

    })

    test('Cedula wih letters FAIL', () => {
        expect(validateCedula('ABBCFGTHYJ')).toBe(false)
        expect(validateCedula('AB2CF54H1J')).toBe(false)
        expect(validateCedula('111111111')).toBe(true)

    })

})

describe('validateName testing', () => {

    test('Name with numbers FAIL', () => {
        expect(validateName('13213131311')).toBe(false)
        expect(validateName('JUAN 3232MILO')).toBe(false)
        expect(validateName('JUAN CAMILO BARRIENTOS')).toBe(true)
        expect(validateName('')).toBe(false)
    })
})

describe('validateData testing', () => {
    test('cédula with letters and name with numbers FAIL', () => {
        expect(validateData('Cédula', '123123123', 'camilo@gmail.com', '232323245', 'ing sistemas')).toBe(false)
        expect(validateData('1001519485', 'Juan Camilo', 'camilo@gmail.com', '2324524452', 'ing química')).toBe(true)

    })

    test('incomplete data FAIL', () => {
        expect(validateData('1001519485', 'Juan Camilo', '', '', '')).toBe(false)
        expect(validateData('', '', '', '', '')).toBe(false)
        expect(validateData('1001519485', '', '', '', '')).toBe(false)
        expect(validateData('', 'Juan Camilo', '', '', '')).toBe(false)
        expect(validateData('1001519485', 'Juan Camilo', 'camilo@gmail.com', '2324524452', 'ing química')).toBe(true)

        
    })
})

describe('validateIfCedulaExists testing', () => {

    test('Cédula already register PASS', async () => {
        expect(await validateIfCedulaExist('1001639741')).toBe(true)
    })

    test("Cédula doesn't exist FAIL", async () => {
        expect(await validateIfCedulaExist('1002323249')).toBe(false)
    })
})

describe('validateIfCedulaOrEmailNotExist testing', () => {

    test('Email already register FAIL',async () => {
        expect(await validateIfCedulaOrEmailNotExist('1001636548', 'camilo@gmail.com')).toBe(false)
        
    })

    test ('Cédula and email unregistered PASS', async () => {
        expect(await validateIfCedulaOrEmailNotExist('425524252', 'carlos26@gmail.com')).toBe(true)

    })
})

