import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Carro = (props) =>{

  const propriedades = ['Revisão gratuita', 'Manual de fábrica', 'Pintura original'];
  const listaPropriedades = propriedades.map ((n, index) => 
    <li key={index}>{n}</li>
  )

  if(props.img){
    return (
      <Fragment>

        <Card style={{ width: '100%', maxWidth: '700px', margin: '3rem auto' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Text className='description'>
              {props.descricao}
            </Card.Text>
            <ol>
              {listaPropriedades}
            </ol>
            <Link to={'./view/'+props.id}>
              <Button variant="primary" className='toCenter'>Saiba Mais</Button>
            </Link>
          </Card.Body>
        </Card>

      </Fragment>
    );
  } else {
    return (
      <Fragment>

        <Card style={{ width: '100%', maxWidth: '700px', margin: '3rem auto' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Text>
            {props.descricao}
            </Card.Text>
            <ol>
              {listaPropriedades}
            </ol>
            <Link to={'./view/'+props.id}>
              <Button variant="primary" className='toCenter'>Saiba Mais</Button>
            </Link>
          </Card.Body>
        </Card>

      </Fragment>
    );
  }
}

export default Carro;