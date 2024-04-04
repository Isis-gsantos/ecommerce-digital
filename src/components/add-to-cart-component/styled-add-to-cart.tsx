import styled from "styled-components";
import { colors } from "../../variables";

export const Button = styled.button`
    border: none;
    background-color: ${colors.darkGrey};
    color: ${colors.white};
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
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