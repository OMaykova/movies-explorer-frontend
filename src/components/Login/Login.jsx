import React from 'react';
import SecurityPage from '../SecurityPage/SecurityPage';
import Form from '../Form/Form';

function Login() {
  return (
    <SecurityPage
      title={'Рады видеть!'}
    >
      <Form 
        formName={'login'}
				buttonTitle={'Войти'}
        />
    </SecurityPage>
  )
}
export default Login;
