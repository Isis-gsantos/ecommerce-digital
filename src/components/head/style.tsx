import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    background: rgb(101,94,97);
    background: linear-gradient(270deg, rgba(101,94,97,1) 0%, rgba(37,36,36,1) 100%);
    min-height: 100vh;
    color: #fff;

    @media (max-width: 500px) {
        background: rgb(101,94,97);
        background: linear-gradient(0deg, rgba(101,94,97,1) 0%, rgba(37,36,36,1) 100%);
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    
    color: #ffffff;

    .backgroundProsucts {
        background: rgb(101,94,97);
        background: linear-gradient(270deg, rgba(101,94,97,1) 0%, rgba(37,36,36,1) 100%);
    }

    h1 {
        background-color: #ffffff;
        color: #252424;
        padding: 10px;
    }

    a {
        color: #ffffff;
    }
`;

export const NavbarDesktop = styled.nav`
    display: block;

    @media (max-width: 910px) {
        display: none;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
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
        gap: 8px;
        font-size: 16px;
    }

    
`;

export const MobileMenu = styled.div`
    display: none;
    
    @media (max-width: 910px) {
        display: block;
        position: relative;
    }

    ul {
        position: absolute;
        z-index: 1;
        height: 350px;
        background-color: #252424;
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: 0;
        gap: 20px;        

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
    }

    button {
        background-color: transparent;
        border: none;
        color: #ffffff;
        font-size: 40px;
        position: relative;
    }
`;

export const AnimatedList = styled.li`
    position: relative;
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
`;

const animatedHeadphone = keyframes`
    from  {
        transform: translateY(0);
    }
    to {
        transform: translateY(10px);
    }
`;

export const ContentBanner = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    gap: 60px;
    padding: 30px;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 20px;

        img {
            width: 100%;
        }
    }

    div {
        max-width: 500px;
    }
    
    img {
        max-width: 350px;
        animation: ${animatedHeadphone} 1.5s infinite alternate ease-in-out;
    }
`;