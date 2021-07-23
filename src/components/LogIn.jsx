import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { login, loginGoogle } from '../actions/action';

const Login = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type='email'
            placeholder='Correo electrónico'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className='d-flex justify-content-center'>
          <Button size='lg' variant='info' type='submit'>
            Iniciar Sesión
          </Button>
        </div>
        <Container className='auth__social-networks'>
          <Container className='google-btn' onClick={handleLoginGoogle}>
            <Container className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='googlebutton'
              />
            </Container>
          </Container>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
