import React from 'react'
import * as S from "./styled"
import Header from '../../components/Header'
import perfil from "../../assets/perfil.jpg"

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Box1>
        <S.Box2>
        <h2>Olá meu nome é Miguel 
          sou um dev front -end</h2>
        <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
        </S.Box2>
        <img src={perfil} alt="foto" />
      </S.Box1>
    </S.Main>
  )
}