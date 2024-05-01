import React from 'react'

import * as S from "./styled"
import Header from '../../components/Header'
import html from "../../assets/html.png"
import azul from "../../assets/azul.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import stilo from "../../assets/stilo.png"

export default function Sobre() {
  return (
    <S.Main>
      <Header/>
      <S.Box>
        <S.Box1>
        <h2>Sobre mim</h2>
        <p>Me chamo miguel tenho 32 anos e sempre gostei de tecnologia porem por obra do destino fui para a area de vendas e varejo porem sempre relacionado com tecnologia, fui especialista Apple, fui consultor da Claro,Vivo e Tim e agora estou na area de Programação e dev front -end, com a ajuda da organização Vai na Web consegui realizar esse sonho.</p>
        <h2>Habilidades</h2>
        </S.Box1>
        <S.Box2>
          <img src={html} alt="ht" />
          <img src={azul} alt="azul" />
          <img src={js} alt="js" />
          <img src={react} alt="react" />
          <img src={stilo} alt="stilo" />
        </S.Box2>
      </S.Box>
    </S.Main>
  )
}