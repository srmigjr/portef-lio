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
    width: 100%;
    height: 100%;

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
@media (max-width: 500px) {
    width: 100%;
    height: 100vh;
    img{
    height: 10vh;
    width: 10vw;
    }}

`
export const Box1 = styled.div`
width: 80%;
height: 60vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
@media (max-width: 500px) {
    width: 100%;
    height: 30vh;

}
`
export const Box2 = styled.div`
${center}
width: 50%;
justify-content: space-evenly;
@media (max-width: 500px) {
    width: 100%;
    height: 60vh;

}
`