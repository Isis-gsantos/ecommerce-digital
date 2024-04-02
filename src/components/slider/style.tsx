import styled from "styled-components";
import { colors } from "../../variables";

export const Container = styled.section`
    min-height: 30vh;
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px;

    .banner {
        border-radius: 20px;
    }
`;

export const Content = styled.article`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-height: 300px;
    gap: 20px;

    h3 {
        color: ${colors.white};
        text-shadow: 2px 2px 4px hsla(0, 0%, 0%, 0.5); 
    }

    img {
        max-height: 300px;
        object-fit: cover;
    }

    @media (max-width: 600px) {
        position: relative;
        
        img {
            
        }

        h3 {
            text-align: center;
            position: absolute;
        }
    }
`;