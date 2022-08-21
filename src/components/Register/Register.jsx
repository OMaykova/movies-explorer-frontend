import React from 'react';
import Form from '../Form/Form';
import SecurityPage from '../SecurityPage/SecurityPage';
import './Register.css';

function Register() {
  return (
    <SecurityPage
      title={'Добро пожаловать!'}
    >
      <Form 
        formName={'register'}
        buttonTitle={'Зарегистрироваться'}
        />
    </SecurityPage>
  )
}
export default Register;
