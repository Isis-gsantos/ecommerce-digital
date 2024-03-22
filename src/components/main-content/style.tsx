import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;

    h2 {
        background-color: #252424;
        color: #ffffff;
        padding: 10px;
    }
`

export const Content = styled.article`
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-top: 30px
`;

export const Products = styled.div`
    background-color:#ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 10px hsla(0, 0%, 0%, 0.1);
    transition: .4s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    div {
        padding: 10px;
        img {
            max-width: 200px;
            height: 250px;
            object-fit: cover;
        }
    }

    p {
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
    }
`;