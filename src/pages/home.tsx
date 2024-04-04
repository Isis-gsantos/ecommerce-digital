import { Head } from "@components/head";
import { Slider } from "@components/slider";
import { Main } from "@components/main-content";
import { QualityList } from "@components/quality-list";
import { Footer } from "@components/footer";
import styled from "styled-components";

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