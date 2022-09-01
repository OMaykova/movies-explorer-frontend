import React from 'react';
import Form from '../Form/Form';
import SecurityPage from '../SecurityPage/SecurityPage';
import './Register.css';

function Register({handleReqest, message}) {
  return (
    <SecurityPage
      title={'Добро пожаловать!'}
    >
      <Form 
        formName={'register'}
        buttonTitle={'Зарегистрироваться'}
        handleReqest={handleReqest}
        message={message}
        />
    </SecurityPage>
  )
}
export default Register;
