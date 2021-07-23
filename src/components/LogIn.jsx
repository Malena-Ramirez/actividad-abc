import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { loginGoogle, loginEmailPassword } from '../actions/action';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
  };

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <Container className='px-5'>
      <h1 className='mt-5 text-center'>Iniciar sesión</h1>
      <Form className='px-5' onSubmit={handleLogin}>
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
        <div className='tex-center mt-3'>
          <Link
            className='text-dark'
            to='/registro'
            style={{ textDecoration: 'none' }}
          >
            Registrarse
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
