import React, { useState, useEffect } from 'react';
import Carro from './Carro';
import { Fragment } from 'react';
import Formulario from './Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const mostraMensagem = () => {
  alert("Criador do sistema é o Víctor!")
}

async function getCarros () {
  let response = await fetch ('http://localhost:3000/api/carros.json');
  let dados = await response.json();
  return dados;
}

const Carros = () => {

  const [carros, setCarros] = useState([])

  
  useEffect (() => {
    getCarros().then(dados => {
      setCarros(dados['carros']);
    })
  }, []) //caso n queira renderizar, basta colocar o []

  const addCarro = (novo_carros) => {
    setCarros([...carros, novo_carros])
  }

  const removerUltimo = () => {
    let novo_carros = [...carros];
    novo_carros.pop();
    setCarros(novo_carros);
  };


  return (
    <Fragment>
      <h3 className='titleColor' style={{ width: '100%', fontSize: "3rem", fontWeight: 'bold', padding: "0", margin: "20px auto", textAlign: 'center'}}>Ardasse Corps LTDA.</h3>

      <Fragment>

        <ButtonGroup className='toCenter'>
          <Button onClick={mostraMensagem} variant="secondary">Mostrar devs</Button>
          <Button onClick={removerUltimo} variant="danger">Remover último carro</Button>
        </ButtonGroup>

        <hr style={{margin: '40px 0 20px', color: '#FFFFFF'}}></hr>

        <Formulario addCarro={addCarro}></Formulario>
      </Fragment>

      {carros.map((carro) => 
        <Carro 
          id = {carro.id}
          titulo = {carro.titulo}
          descricao = {carro.descricao}
          img = {carro.img}
        ></Carro>
      )}

    </Fragment>
  );

}

export default Carros;