import React from 'react';
import SecurityPage from '../SecurityPage/SecurityPage';
import Form from '../Form/Form';

function Login({handleReqest, message}) {
  return (
    <SecurityPage
      title={'Рады видеть!'}
    >
      <Form 
        formName={'login'}
        buttonTitle={'Войти'}
        handleReqest={handleReqest}
        message={message}
        />
    </SecurityPage>
  )
}
export default Login;
