/* eslint-disable */
import *as Yup from 'yup';

export const cpfSchema = Yup.string()
  .required('CPF é obrigatório')
  .length(11, 'O CPF deve ter exatamente 11 dígitos')
  .matches(/^\d+$/, 'CPF deve conter apenas números');
