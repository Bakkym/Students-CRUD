
import { expect, test, describe, vi } from 'vitest'
import {validateCedula, validateName, validateData, validateIfCedulaOrEmailNotExist} from '../middlewares/students.validateData'


describe('validateCedula testing', () => {

    test('cédula con tamaño menor a 8 y mayor a 10 FAIL', () => {
        expect(validateCedula('111111111111')).toBe(false)
        expect(validateCedula('2442424252525')).toBe(false)
        expect(validateCedula('2323223')).toBe(false)
        expect(validateCedula('1234567890')).toBe(true)
        expect(validateCedula('12345678')).toBe(true)

    })

    test('Cedula con letras FAIL', () => {
        expect(validateCedula('ABBCFGTHYJ')).toBe(false)
        expect(validateCedula('AB2CF54H1J')).toBe(false)
        expect(validateCedula('111111111')).toBe(true)

    })

})

describe('validateName testing', () => {

    test('Nombre con números FAIL', () => {
        expect(validateName('13213131311')).toBe(false)
        expect(validateName('JUAN 3232MILO')).toBe(false)
        expect(validateName('JUAN CAMILO BARRIENTOS')).toBe(true)
    })
})

describe('validateData testing', () => {
    test('cédula con letras y nombre con números FAIL', () => {
        expect(validateData('Cédula', '123123123', 'camilo@gmail.com', '232323245', 'ing sistemas')).toBe(false)
        expect(validateData('1001519485', 'Juan Camilo', 'camilo@gmail.com', '2324524452', 'ing química')).toBe(true)

    })

    test('datos incompletos FAIL', () => {
        expect(validateData('1001519485', 'Juan Camilo', '', '', '')).toBe(false)
        expect(validateData('', '', '', '', '')).toBe(false)
        expect(validateData('1001519485', '', '', '', '')).toBe(false)
        expect(validateData('', 'Juan Camilo', '', '', '')).toBe(false)
        expect(validateData('1001519485', 'Juan Camilo', 'camilo@gmail.com', '2324524452', 'ing química')).toBe(true)

        
    })
})

describe('validateIfCedulaOrEmailNotExist testing', () => {
    test('Cédula ya registrado FAIL', async () => {
        expect(await validateIfCedulaOrEmailNotExist('1001639741', 'pablito3@gmail.com')).toBe(false)

    })

    test('Email ya registrado FAIL',async () => {
        expect(await validateIfCedulaOrEmailNotExist('1001636548', 'camilo@gmail.com')).toBe(false)
        
    })

    test ('Cédula y email no registrados PASS', async () => {
        expect(await validateIfCedulaOrEmailNotExist('425524252', 'carlos26@gmail.com')).toBe(true)

    })
})