import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const Content = styled.ul`
    display: flex;
    gap: 60px;
    background-color: #dee2e6;
    border-radius: 5px;
    padding: 30px;

    li {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 18px;
        font-weight: 600;
    }
`;