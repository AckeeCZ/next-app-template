import { formError } from '../errors';
import { required } from './general';

export const MIN_LENGTH = 8;
export const includesOneDigit = /(?=.*[0-9])/;
export const includesOneUpperCase = /(?=.*[A-Z])/;
export const includesOneLowerCase = /(?=.*[a-z])/;

export const password = required
    .min(MIN_LENGTH, formError.passwordLength)
    .refine(val => includesOneDigit.test(val), {
        message: formError.passwordNumeric,
    })
    .refine(value => includesOneUpperCase.test(value) && includesOneLowerCase.test(value), {
        message: formError.passwordCasing,
    });
