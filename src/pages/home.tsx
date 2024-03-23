import { QualityList } from "../components/quality-list";
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
            <QualityList />
        </Container>
    )
};

const Container = styled.div`
    background-color: #f7ede2;
`;