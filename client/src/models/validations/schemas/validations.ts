import { object, string } from 'yup';

import { VALIDATION_ERRORS } from '../errors/errors';
import { NO_SPECIAL_SYMBOLS, ONLY_NUMBER } from '../regExp/regExp';


export const inputValidationSchema = object({
  cubicM: string()
    .matches(NO_SPECIAL_SYMBOLS, VALIDATION_ERRORS.regExp)
    .matches(ONLY_NUMBER, VALIDATION_ERRORS.regExp),
  thousandCubicM: string()
    .matches(NO_SPECIAL_SYMBOLS, VALIDATION_ERRORS.regExp)
    .matches(ONLY_NUMBER, VALIDATION_ERRORS.regExp),
  millionCubicM: string()
    .matches(NO_SPECIAL_SYMBOLS, VALIDATION_ERRORS.regExp)
    .matches(ONLY_NUMBER, VALIDATION_ERRORS.regExp),
  billionCubicM: string()
    .matches(NO_SPECIAL_SYMBOLS, VALIDATION_ERRORS.regExp)
    .matches(ONLY_NUMBER, VALIDATION_ERRORS.regExp)
});

export const inputInitialValues = {
  cubicM: '',
  thousandCubicM: '',
  millionCubicM: '',
  billionCubicM: '',
  changeableParameter: ''
};