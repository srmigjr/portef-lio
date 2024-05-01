import React from 'react'

import * as S from "./styled"
import Header from '../../components/Header'
import Carrosel from "react-elastic-carousel"
import desafiomac from "../../assets/desafiomac.png"
import primevideo from "../../assets/primevideo.jpg"
import selfcare from "../../assets/selfcare.jpg"
import noritmo from "../../assets/noritmo.png"
export default function Projetos() {
  return (
     <S.Main>
      <Header/>
      <S.Container>
      <h2>projetos</h2>
        <S.BoxImg>
         <Carrosel>
          <div>
            <a href='https://desafio-macdonals.vercel.app/'><img src={desafiomac} alt="mac" /></a>
            <h2>Mac Donalds</h2>
          </div>
          <div>
          <a href='https://desafio-final-vnw-modulo1-shtf.vercel.app/'><img src={primevideo} alt="prime" /></a>
            <h2>Prime Video</h2>
          </div>
          <div>
          <a href='https://desafio-final-vnw-modulo1-shtf.vercel.app/'><img src={selfcare} alt="self" /></a>
            <h2>Self Care</h2>
          </div>
          <div>
          <a href='https://desafio03vnw.vercel.app/'><img src={noritmo} alt="" /></a>
            <h2>projeto4</h2>
          </div>
         
         </Carrosel>
        </S.BoxImg>
      </S.Container>
    </S.Main>
  )
}