import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    background: rgb(101,94,97);
    background: linear-gradient(270deg, rgba(101,94,97,1) 0%, rgba(37,36,36,1) 100%);
    min-height: 100vh;
    color: #fff;
`;

export const Header = styled.header`
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
        gap: 8px;
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
`

export const DropdownList = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    ul {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 40px;
        right: 0;
        left: -25px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 15px;
        width: 100px;
        z-index: 1;

        li {
        transition: .3s ease-in;
        padding: 5px;

        &:hover {
            background-color: #eee;
            color: black;
        }
        }
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

    div {
        max-width: 500px;
    }
    
    img {
        max-width: 350px;
        animation: ${animatedHeadphone} 1.5s infinite alternate ease-in-out;
    }
`;