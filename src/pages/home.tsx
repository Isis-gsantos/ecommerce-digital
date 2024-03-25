import { QualityList } from "../components/quality-list";
import { Head } from "../components/head/index";
import { Main } from "../components/main-content";
import { Slider } from "../components/slider";
import styled from "styled-components";
import { Footer } from "../components/footer";

export const Home = () => {
    return (
        <Container>
            <Head />
            <Slider />
            <Main />
            <QualityList />
            <Footer />
        </Container>
    )
};

const Container = styled.div`
    background-color: #f7ede2;
`;