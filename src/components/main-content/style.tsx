import styled from "styled-components";
import { colors } from "../../variables";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;

    h2 {
        background-color: ${colors.darkGrey};
        color: ${colors.white};
        padding: 10px;
    }
`

export const Content = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: 30px;
`;

export const Products = styled.div`
    background-color:${colors.white};
    padding: 20px;
    border-radius: 10px;
    box-shadow: ${colors.boxShadow};
    width: 220px;
    position: relative;
    
    a {
        color: ${colors.darkGrey};
    }

    span {
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: ${colors.darkGrey};
        color: ${colors.white};
        cursor: pointer;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 200px;
            height: 200px;
            object-fit: cover;
            transition: .4s ease-in-out;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    h4 {
        max-width: 200px;
        margin-top: 10px;
    }

    p {
        margin: 5px 0;
        font-weight: 600;
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
    }
`;

export const StyledButtonCart = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    button {
        font-size: 16px;
        height: 30px;
        border-radius: 5px;
        display: flex;
        align-items: center;
    }

    .removeFromCart {
            color: red;
            background-color: transparent;
            font-size: 18px;
        }
`;