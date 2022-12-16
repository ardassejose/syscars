import React, { useEffect, useState } from 'react';
import Carro from './Carro';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

async function getCarros () {
  let response = await fetch ('http://localhost:3000/api/carros.json');
  let dados = await response.json();
  return dados;
}

const View = (props) => {

  const propriedades = ['Revisão gratuita', 'Manual de fábrica', 'Pintura original'];
  const listaPropriedades = propriedades.map ((n, index) => 
    <li key={index}>{n}</li>
  )

  const [carros, setCarros] = useState([])

  useEffect (() => {
    getCarros().then(dados => {
      setCarros(dados['carros']);
    })
  }, []) //caso n queira renderizar, basta colocar o []

  const {id} = useParams();

  return (
    <Fragment>
      {carros.filter(carro => carro.id === Number (id)).map(carroFiltrado =>(
        <Carro
          id = {carroFiltrado.id}
          titulo = {carroFiltrado.titulo}
          descricao = {carroFiltrado.descricao}
          img = {carroFiltrado.img}
        ></Carro>
      ))
      }
    </Fragment>
  )

}

export default View;