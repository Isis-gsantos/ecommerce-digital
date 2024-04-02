import styled, { keyframes } from "styled-components";
import { colors } from "../variables";

const animatedProduct = keyframes`
    from  {
        transform: translateY(0);
    }
    to {
        transform: translateY(10px);
    }
`;

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
    background-color: ${colors.productsBackground};
    padding: 20px;

    article {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        @media (max-width: 730px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const ContainerImage = styled.div`
    max-width: 300px;
    background-color: #f8f3ef;
    padding: 45px 70px;
    border-radius: 10px;
    box-shadow: ${colors.boxShadow};
    display: flex;
    justify-content: center;
    align-items: center;

     img{
        max-width: 300px;
        max-height: 350px;
        animation: ${animatedProduct} 1.5s infinite alternate ease-in-out;
     }

     @media (max-width: 400px) {
        padding: 40px;

        img {
            width: 100%;
        }
     }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    color: ${colors.darkGrey};
    max-width: 400px;
    
    a { 
        color: ${colors.returnLinkColor};
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    h4 {
        font-size: 24px;
    }

    p {
        font-size: 18px;
        font-weight: 500;
        margin: 5px 0;
    }

    button {
        border: none;
        background-color: ${colors.darkGrey};
        color: ${colors.white};
        padding: 10px;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 600;
        width: 100%;
        cursor: pointer;
        max-width: 250px;
        margin-top: 15px;
    }
`;