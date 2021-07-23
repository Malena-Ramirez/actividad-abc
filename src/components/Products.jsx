import React, { useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
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
    <Container className='mt-4'>
      <h1 className='text-center h2 mb-4'>Productos</h1>
      <Container>
        <Row>
          <Col xs={12} md={3} className='me-5'>
            <Form onSubmit={handleRegister}>
              <h3 className='text-center mb-4'>Registrar producto</h3>
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
              <div className='d-flex justify-content-center'>
                <Button size='lg' variant='info' type='submit'>
                  Guardar
                </Button>
              </div>
            </Form>
          </Col>
          <Col xs={12} md={8}>
            <h3 className='text-center mb-5'>Lista de productos</h3>
            <ListProducts />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Products;
