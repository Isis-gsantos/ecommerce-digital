import { BsTruck, BsShieldCheck, BsCheckCircle, BsArrowRepeat } from "react-icons/bs";
import { Container, Content } from "./style";

export const QualityList = () => {
    return (
        <>
            <Container>
                <nav>
                    <Content>
                        <li>
                            <BsTruck />
                            <span>Delivery</span>
                        </li>

                        <li>
                            <BsShieldCheck />
                            <span>Pagamento Seguro</span>
                        </li>

                        <li>
                            <BsCheckCircle />
                            <span>Qualidade Original</span>
                        </li>

                        <li>
                            <BsArrowRepeat />
                            <span>Reembolso</span>
                        </li>
                    </Content>
                </nav>
            </Container>
        </>
    );
};