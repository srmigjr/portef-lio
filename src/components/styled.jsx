import styled,{createGlobalStyle, css} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
  const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Header = styled.header`
width: 15vw;
background-color: #7deeb9;
display: flex;
flex-direction: column;
align-items: center;



@media (max-width: 700px) {
    width: 20vw;
}
@media (max-width: 500px) {
    width: 100%;
    height: 30vh;
}

`

export const BoxLogo = styled.div`

 
 height: 38vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
color: white;
img{
    width: 10vw;
    border-radius: 50%;
}
@media (max-width: 500px) {
    flex-direction: row;
    padding-left: 20px;
   
}
`
export const Title = styled.h2`

width: 100%;
text-align: center;
`
export const Text = styled.p`

width: 100%;
text-align: center;
`

export const BoxMenu = styled.nav`

height: 38vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
  ul{
      width: 100%;
    }

li:nth-child(1){
   border-top: solid 1px white; 
}
a{
 color: white;  
 text-decoration: none;
}
`
export const Lista = styled.li`
    list-style: none;
    border-bottom: solid 1px white;
    height: 12.5vh;
    width: 100%;
    ${center}
    @media (max-width: 500px) {
    height: 5vh;
    }
`

export const BoxIcon = styled.div`

width: 15vw;
height: 28vh;
${center}
flex-direction: column;
justify-content: space-evenly;
@media (max-width: 500px) {
    display: none;
}
`