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
export const Box = styled.section`
${center}
background-color: #04470a;
flex-direction: column;


h2{
    ${center}
    width: 15vw;
    font-size: 40px;
    color: white;
}
p{
    ${center}
    font-size: 25px;
    color: white;
}


`
export const Box1 = styled.div`
width: 80%;
height: 60vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;


`
export const Box2 = styled.div`
${center}
width: 50%;
justify-content: space-evenly;

`