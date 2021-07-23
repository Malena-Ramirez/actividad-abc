import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ListProducts = () => {
  const { product } = useSelector((store) => store.products);
  console.log(product);
  return (
    <Table striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>Id</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio unitario</th>
        </tr>
      </thead>
      <tbody>
        {product ? (
          product.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.quantity}</td>
              <td>{element.price}</td>
            </tr>
          ))
        ) : (
          <p>No hay datos disponibles</p>
        )}
      </tbody>
    </Table>
  );
};

export default ListProducts;
