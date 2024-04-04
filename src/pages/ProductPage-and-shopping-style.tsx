import styled, { keyframes } from "styled-components";
import { colors, width } from "../variables";

const animatedProduct = keyframes`
    from  {
        transform: translateY(0);
    }
    to {
        transform: translateY(10px);
    }
`;

export const ProductsContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    position: relative;
    background-color: ${colors.productsBackground};
    min-height: 100vh;

    h2 {
        background-color: ${colors.darkGrey};
        color: ${colors.white};
        padding: 10px;
        position: absolute;
        top: 30px;
    }

    .return-home {
        position: absolute;
        top: 35px;
        left: 30px;
        color: ${colors.returnLinkColor};
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .checkout {
        background-color: ${colors.darkGrey};
        color: ${colors.white};
        padding: 10px;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 600;
    }

    .total-cost {
        margin: 10px 0;
    }

    @media (max-width: 500px) {
        .return-home {
            position: absolute;
            top: 100px;
            left: 50%; 
            transform: translateX(-50%); 
        }
    }
`;


export const ProductsContent = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin: 80px 0 30px;

    @media (max-width: 500px) {
        margin-top: 130px;
    }
`;

export const ProductExibtion = styled.div`
    background-color:${colors.white};
    padding: 20px;
    border-radius: 10px;
    box-shadow: ${colors.boxShadow};
    width: 220px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            max-width: ${width.imageSize};
            max-height: ${width.imageSize};
            object-fit: cover;
        }
    }

    h4 {
        max-width: 200px;
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
        margin: 5px 0;
    }
`;

export const ProductPageContainer = styled.section`
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

export const ProductPageContainerImage = styled.div`
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

export const ProductPageContent = styled.div`
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
        border-radius: 10px;
        font-size: 15px;
        font-weight: 600;
        width: 100%;
        cursor: pointer;
        margin: 5px 0;
        display: flex;
        justify-content: center;
    }
`;