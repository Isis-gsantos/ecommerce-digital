import { Head } from "../components/head/index";
import { Main } from "../components/main-content";
import { Slider } from "../components/slider";
import styled from "styled-components";

export const Home = () => {
    return (
        <Container>
            <Head />
            <Slider />
            <Main />
        </Container>
    )
}

const Container = styled.div`
    background-color: #f7ede2;
`