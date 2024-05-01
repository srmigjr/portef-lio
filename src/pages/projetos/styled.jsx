import styled from "styled-components";


export const Main = styled.main`

height: 100vh;
display: flex;
justify-content: center;

border: solid 1px;
@media (max-width: 500px) {
    flex-direction: column;
}

`
export const Container = styled.section`
background-color:#04470a;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h2{
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 30px;
    height: 15vh;
    color: white;
}

`

export const BoxImg = styled.div`

width: 70vw;
.rec .rec-arrow-right{
    background-color: #45e60f;
}
.rec .rec-arrow-left{
    background-color: #45e60f;
}
img{
    width: 35vw;
    height: 50vh;
}

`