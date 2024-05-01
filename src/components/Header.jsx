import { Link } from "react-router-dom";
import * as S from "./styled"
import linkedin from "../assets/link.png"
import git from "../assets/git.png"
import face from "../assets/face.png"
import perfil from "../assets/perfil.jpg"


export default function Header() {
  return (
    <S.Header>
        <S.BoxLogo>
          <img src={perfil} alt="foto" />
          <S.Title>Miguel</S.Title>
          <S.Text>Front-end Developer</S.Text>
        </S.BoxLogo>
        <S.BoxMenu>
            <ul>
            <S.Lista><Link  to="/">Inicio</Link></S.Lista>
                <S.Lista><Link to="/sobre">Sobre mim</Link></S.Lista>
                <S.Lista><Link to="/projetos">Projetos</Link></S.Lista>
            </ul>
        </S.BoxMenu>
        <S.BoxIcon>
          <a href="www.linkedin.com/in/miguel-junior-a11b95208"><img src={linkedin} alt="" /></a>
          <a href="https://github.com/srmigjr"><img src={git} alt="" /></a>
          <a href="https://desafio03vnw.vercel.app/"><img src={face} alt="" /></a>
        </S.BoxIcon>

    </S.Header>
  )
}