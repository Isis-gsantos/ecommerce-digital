import styled from "styled-components";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import headphoneDestaque from '../../images/headphone-1.png'

export const Head = () => {
    return (
        <>
            <Container>
                <Header>
                    <h1>DigitalHub Store</h1>

                    <nav>
                        <ul>
                            <li>Catálogo</li>
                            <div><input type="text" placeholder="Buscar" /> <span><BsSearch /></span></div>
                            <li><BsHeart /> Curtidos</li>
                            <li><BsCart3 /> Carrinho</li>
                        </ul>
                    </nav>
                </Header>

                <ContentBanner>
                    <div>
                        <h2>Descubra o Futuro Tech: Celulares, Headphones & Smartwatches Aqui!</h2>
                        <p>Explore nossa Coleção</p>
                    </div>
                    <img src={headphoneDestaque} alt="Headphone branco em destaque no banner" />
                </ContentBanner>
            </Container>
        </>
    )
};

const Container = styled.section`
    background: rgb(101,94,97);
    background: linear-gradient(270deg, rgba(101,94,97,1) 0%, rgba(37,36,36,1) 100%);
    min-height: 100vh;
    color: #fff;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;

    h1 {
        background-color: #ffffff;
        color: #252424;
        padding: 5px;
    }

    nav ul {
        display: flex;
        gap: 30px;
        cursor: pointer;
    }

    div {
        position: relative;
        

        input {
            border: 1px solid #fff;
            background: transparent;
            border-radius: 5px;
            padding: 5px 15px;
            color: #ffffff;
            
            position: relative;
            &::placeholder {
                color: #ffffff;
                padding: 0 10px;
            }
        }

        span {
            position: absolute;
            color: black;
            right: 1px;
            color: #fff;
            padding: 0 5px;
            height: 100%;
            border-radius: 5px;
            top: 5px;
        }
    }


    li {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        gap: 8px;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: #fff;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
`;

const ContentBanner = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 60px;

    div {
        max-width: 500px;
    }
    
    img {
        max-width: 350px;
    }
`
