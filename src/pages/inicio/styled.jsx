import styled,{createGlobalStyle,css} from "styled-components";

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
export const Main = styled.main`

height: 100vh;
display: flex;
@media (max-width: 500px) {
    flex-direction: column;
}
`
export const Box1 = styled.section`
${center}
justify-content: space-evenly;
background-color: #04470a;
border: solid black 1px;
width: 100%;

img{
    width: 20vw;
    border-radius: 50%;
}

`
export const Box2 = styled.div`
width: 50%;
height: 30vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;


h2{

    width: 90%;
    font-size: 50px;
    color: white;
}
p{
    font-size: 25px;
    color: white;
}


`