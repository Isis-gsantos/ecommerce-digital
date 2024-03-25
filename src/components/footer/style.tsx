import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #252424;
    color: #ffffff;
`;

export const Subscribe = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 200px;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    h2 {
        background-color: #ffffff;
        color: #252424;
        padding: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        
        label {
            text-align: center;
            max-width: 300px;
        }

        div {
            display: flex;
            align-items: center;
            input {
                background-color: transparent;
                border: 1px solid #fff;
                padding: 5px;
                width: 200px;
                color: #fff;

                &::placeholder {
                    padding: 0 8px;
                }
            }

            button {
                padding: 6px 8px;
                background-color: #ffffff;
                color: #252424;
                border: none;
                font-weight: 600;
                cursor: pointer;
                transition: .4s ease-in-out;

                &:hover {
                    background-color: #eeee;
                }
            }
        }
    }
`;

export const Services = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;
    gap: 50px;

    @media (max-width: 910px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div{
            display: flex;
            gap: 20px;
            font-size: 18px;
        }
    }

    li {
        padding: 5px 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;