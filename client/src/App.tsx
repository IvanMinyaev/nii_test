import React, { useEffect, useState } from 'react';

import { MOCK_DATA_CARDS } from './mocks';

import { Form, FormikContext, useFormik } from 'formik';

import { useEditDataMutation } from './store/data.api';

import { isEqual } from './helpers/isEqual';

//types
import { inputInitialValues, inputValidationSchema } from './models/validations/schemas/validations';
import { ErrorsType, VALIDATION_ERRORS } from './models/data/data';

//ui
import '../src/assets/global.scss';
import './assets/fonts/style.css';
import styles from './App.module.scss';
import { Box } from './components/ui/Box/Box';
import { Card } from './components/Card/Card';
import { IndicatorsBlock } from './components/ui/IndicatorsBlock/IndicatorsBlock';
import { InputValue } from './components/ui/inputValue/inputValue';
import { Button } from './components/ui/Button/Button';

export const App: React.FC = () => {
  const [serverError, setServerError] = useState<string | undefined>();

  const [valuesState, setvaluesState] = useState({ ...inputInitialValues, changeableParameter: '' });

  const [editData, { isLoading, error }] = useEditDataMutation();

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

    const { name, value } = e.target;

    formik.setFieldValue(`${name}`, `${value}`)

    setvaluesState({
      ...valuesState,
      [name]: value,
      'changeableParameter': name,
    });
  };

  const handleSubmit = async () => {
    if (isEqual(valuesState, inputInitialValues)) {
      setServerError('Заполните хотя бы одно поле');

      setTimeout(() => {
        setServerError(undefined);
      }, 2000);
    }

    const result = await editData(valuesState);

    if (isLoading) {
      return;
    }

    if ('data' in result) {
      setvaluesState(result.data);
    }
  };

  const formik = useFormik({
    initialValues: valuesState,
    validationSchema: inputValidationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (error && 'data' in error) {
      const serverErrors = error.data as {
        errors: ErrorsType;
        message: string;
      };
      if (
        serverErrors.message.search(/Прописать месседж ошибки с сервера, н-р: "все поля пустые"/i) !== -1
      ) {
        setServerError(VALIDATION_ERRORS.required);
      } else {
        setServerError(VALIDATION_ERRORS.generalError);
      }
    }
  }, [error]);

  return (
    <FormikContext.Provider value={formik}>
      <Form>

        <div className="container">
          <Box mt={99}></Box>
          <div className={styles.list_wrapper}>
            {MOCK_DATA_CARDS.map((el, index) => (
              index === 0 
              ? <Card key={el.key} title={el.title} picture_path={el.picture_path} active={true}></Card>
              : <Card key={el.key} title={el.title} picture_path={el.picture_path}></Card>
            ))}
          </div>
          <Box mb={131}></Box>
          {serverError && (
            <>
            <div className={styles.error}>{serverError}</div>
            <Box mb={25}></Box>
            </>
          )}
          <div className={styles.search_block__wrapper}>
            <div className={styles.search_block}>
              <IndicatorsBlock placeholder='м³/сек'>
              </IndicatorsBlock>
              <InputValue
                name={'cubicM'}
                placeholder={'Введите значение'}
                value={valuesState.cubicM}
                onChange={(e) => handleInput(e)}
              ></InputValue>
            </div>
            <div className={styles.search_block}>
              <IndicatorsBlock placeholder='тыс м³/час'>
              </IndicatorsBlock>
              <InputValue
                name={'thousandCubicM'}
                placeholder={'Введите значение'}
                value={valuesState.thousandCubicM}
                onChange={(e) => handleInput(e)}
              ></InputValue>
            </div>
          </div>
          <div className={styles.search_block__wrapper}>
            <div className={styles.search_block}>
              <IndicatorsBlock placeholder='млн м³/сут'>
              </IndicatorsBlock>
              <InputValue
                name={'millionCubicM'}
                placeholder={'Введите значение'}
                value={valuesState.millionCubicM}
                onChange={(e) => handleInput(e)}
              ></InputValue>
            </div>
            <div className={styles.search_block}>
              <IndicatorsBlock placeholder='млрд м³/год'>
              </IndicatorsBlock>
              <InputValue
                name={'billionCubicM'}
                placeholder={'Введите значение'}
                value={valuesState.billionCubicM}
                onChange={(e) => handleInput(e)}
              ></InputValue>
            </div>
          </div>
          <Box mb={99}></Box>
          <div className={styles.button_wraper}>
            <Button
              color='primary'
              label='РАСЧЕТ'
              width={199}
              type='submit'
              fullWidth={true}
              clicked={handleSubmit}
            ></Button>
          </div>
        </div>
      </Form>
    </FormikContext.Provider>
  );
};