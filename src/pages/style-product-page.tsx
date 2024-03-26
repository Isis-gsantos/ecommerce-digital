import styled, { keyframes } from "styled-components";

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
    background-color: #ebe5e0;
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
    box-shadow: 3px 3px 10px hsla(0, 0%, 0%, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

     img{
        max-width: 300px;
        max-height: 350px;
        animation: ${animatedProduct} 1.5s infinite alternate ease-in-out;
     }

     @media (max-width: 400px) {
        /* max-width: 100%; */
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
    color: #252424;
    max-width: 400px;
    
    a { 
        color: #023e8a;
        margin-bottom: 15px;
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
        background-color: #252424;
        color: #fff;
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