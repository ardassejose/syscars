import React, { useState } from 'react';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = (props) => {

  const [campos, setCampos] = useState(
    {
      titulo: '',
      descricao: '',
      img: ''
    }
  );
  const handleChange = (event) => setCampos (
    {
      ...campos,
      [event.currentTarget.name] : event.currentTarget.value
    }
  )

  const handleSubmit = (event) => {
    props.addCarro(campos)
    event.preventDefault();
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>

        <Form className='containerWidth'>
          <Form.Group className="mb-3">
            <Form.Label className='titleColor'>Título</Form.Label>
            <Form.Control id="titulo" name="titulo" type="text" value={campos.titulo} onChange={handleChange} placeholder="Digite o modelo do carro" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='titleColor'>Descrição</Form.Label>
            <Form.Control id="descricao" name="descricao" type="text" value={campos.descricao} onChange={handleChange} placeholder="Digite a descrição do carro" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className='titleColor'>URL de Imagem</Form.Label>
            <Form.Control id="img" name="img" type="text" value={campos.img} onChange={handleChange} placeholder="Insira a URL do carro" />
          </Form.Group>
          
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Salvar
          </Button>
        </Form>
      </form>
    </Fragment>
  );
}

export default Formulario;