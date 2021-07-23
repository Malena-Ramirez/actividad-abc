import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { singupEmailPasswordName } from '../actions/action';

const Signup = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    pass1: '',
    pass2: '',
  });

  const { name, email, pass1, pass2 } = formValues;

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(singupEmailPasswordName(email, pass1, name));
  };

  return (
    <Container>
      <h1 className='mt-5 text-center'>Registrarse</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nombre'
            name='name'
            value={name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type='email'
            placeholder='email'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder='Contraseña'
            name='pass1'
            value={pass1}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicRepitPassword'>
          <Form.Label>Repita contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder='Repita contraseña'
            name='pass2'
            value={pass2}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className='d-flex justify-content-center'>
          <Button size='lg' variant='info' type='submit'>
            Registrarse
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Signup;
