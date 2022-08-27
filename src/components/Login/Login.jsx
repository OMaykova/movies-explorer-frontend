import React from 'react';
import SecurityPage from '../SecurityPage/SecurityPage';
import Form from '../Form/Form';

function Login({handleReqest}) {
  return (
    <SecurityPage
      title={'Рады видеть!'}
    >
      <Form 
        formName={'login'}
				buttonTitle={'Войти'}
        handleReqest={handleReqest}
        />
    </SecurityPage>
  )
}
export default Login;
