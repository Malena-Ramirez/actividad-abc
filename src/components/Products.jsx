import React, { useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { productRegister, productList } from '../actions/action';
import ListProducts from './ListProducts';

const Products = () => {
  const [formValues, handleInputChange, reset] = useForm({
    id: '',
    name: '',
    quantity: '',
    price: '',
  });

  const { id, name, quantity, price } = formValues;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(productRegister(id, name, quantity, price));
    reset();
  };

  return (
    <Container className='mt-1 p-5'>
      <h1 className='text-center'>Productos</h1>
      <Form className='p-5' onSubmit={handleRegister}>
        <Form.Group className='mb-3' controlId='formBasicId'>
          <Form.Label>Id</Form.Label>
          <Form.Control
            type='text'
            name='id'
            value={id}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicQuantity'>
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type='number'
            name='quantity'
            value={quantity}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPrice'>
          <Form.Label>Precio unitario</Form.Label>
          <Form.Control
            type='text'
            name='price'
            value={price}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button size='lg' variant='info' type='submit'>
          Guardar
        </Button>
      </Form>
      <ListProducts />
    </Container>
  );
};

export default Products;
