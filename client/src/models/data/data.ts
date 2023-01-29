export type DataType = {
  cubicM: number,
  thousandCubicM: number,
  millionCubicM: number,
  billionCubicM: number,
};

export type ErrorsType = {
  error?: string[];
};

export type CalculatedValue = {
  name: string;
};

export const VALIDATION_ERRORS = {
  required: 'Заполните какое-либо поле',
  generalError: 'Ошибка сервера'
};