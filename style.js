import styled from "styled-components"

const Full = styled.div`
    height: 100vh;
    display: flex;
    flex-direction:column; 
    align-items:center ;
    justify-content: center;
`
const Rectangle = styled.div`
    height: 100%;
    width: 40%;
    border-radius: 5%;
    border: 1px solid;
    margin: 3%;
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 1.5fr 0.5fr; 
    gap: 0px 0px; 
    .Input { grid-area: 1 / 1 / 3 / 2; }
    .Result { grid-area: 2 / 1 / 3 / 2; }
    @media (max-width:700px){
        width: 100%;
        border: none;
    }
` 
const Input = styled.div`

    font-size: 10px;
    .head {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
        "h1 select";

        padding: 3%;

        h1{
            text-align: right;
        }
        select{
            
            width: 70%;
            height: 100%;
        }
        @media (max-width : 925px){
            display: flex;
            flex-direction: column;
            h1{text-align:center}
            select{align-self:center;text-align:center;width:50%}
            
        }
}

`
const Styleforinput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 84%;
    .input{
        width: 100%;
        height: 100%;
        text-align: center; 
        font-weight: 800;
        outline: none;
        border: none;
        border-bottom:1px solid;
        :focus{
            border: 3px solid ;
        }
    }
    button{
            width: 80%;
            padding: 2% 8%;
            background-color: transparent;
            /* border-radius: 10px; */
            border: 1px solid;
            /* margin: 1%; */
           cursor: pointer;
           transition:0.3s ease;
           &:hover{background-color:black;color:white;}
           &:active{transform:scale(.9,.9)}
           @media(max-width:700px){
            margin-bottom: 30px;
           }
        }
`

const Result = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        width: 100%;
        text-align: center;
        padding: 1%;
    }
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid;
    align-self: flex-end;
    width: 100%;
    height: 8%;
    user-select: none;
    font-size: 10px;
    span{color:red;}
`

export { Full,Rectangle,Footer,Input,Result,Styleforinput}
