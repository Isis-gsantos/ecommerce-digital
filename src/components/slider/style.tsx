import styled from "styled-components";

export const Container = styled.section`
    min-height: 30vh;
    max-width: 1500px;
    margin: 0 auto;
    padding: 50px;

    .banner {
        border-radius: 20px;
    }
`;

export const Content = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-height: 300px;

    h3 {
        color: #fff;
        text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.5); 
    }

    img {
        max-height: 300px;
        object-fit: cover;
    }
`;