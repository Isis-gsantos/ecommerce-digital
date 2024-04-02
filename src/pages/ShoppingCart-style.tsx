import styled from "styled-components";
import { colors, width } from "../variables";

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
`;

export const ProductsContent = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin: 80px 0 30px;
    
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
`;