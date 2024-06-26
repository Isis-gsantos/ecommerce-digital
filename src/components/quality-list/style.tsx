import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const Content = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 60px;
    background-color: #dfe3e7;
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