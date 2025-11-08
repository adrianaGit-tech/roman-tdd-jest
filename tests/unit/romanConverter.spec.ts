import { describe, test, expect } from '@jest/globals';
import { convertRoman, convert_number } from '../../src/romanConverter';

describe('convertRoman', () => {
    test('convierte I en 1', () => {
        expect(convertRoman('I')).toBe(1);
    });

    test('convierte II en 2', () => {
        expect(convertRoman('II')).toBe(2);
    });

    test('convierte IV en 4', () => {
        expect(convertRoman('IV')).toBe(4);
    });

    test('convierte IX en 9', () => {
        expect(convertRoman('IX')).toBe(9);
    });

    test('convierte XV en 15', () => {
        expect(convertRoman('XV')).toBe(15);
    });

    test('convierte XX en 20', () => {
        expect(convertRoman('XX')).toBe(20);
    });

    test('convierte MCMXC en 1990', () => {
        expect(convertRoman('MCMXC')).toBe(1990);
    });

    test('lanza error si el símbolo es inválido', () => {
        expect(() => convertRoman('A')).toThrow();
    });

    test('lanza error si el string está vacío', () => {
        expect(() => convertRoman('')).toThrow();
    });

});
