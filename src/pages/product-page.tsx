import { Link, useParams } from "react-router-dom";
import { dataPhones, dataHeadphones, dataWatch } from "../components/products";
import { Products } from "../components/products";
import { Container, ContainerImage, Content } from "./style-product-page";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Navbar } from "../components/head/navbar";

export const ProductPage = () => {
    const { category, id } = useParams<{ category: string; id: string }>();
    let product: Products | undefined | null;

    switch (category) {
        case '0':
            product = dataPhones.find(item => item.id === id);
            break;
        case '1':
            product = dataHeadphones.find(item => item.id === id);
            break;
        case '2':
            product = dataWatch.find(item => item.id === id);
            break;
        default:
            product = null;
            break;
    }

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <>
            <div style={{ background: 'linear-gradient(270deg, rgba(101,94,97,1) 0%, rgba(37,36,36,1) 100%)' }}>
                <Navbar />
            </div>
            <Container>
                <article key={product.id}>
                    <ContainerImage>
                        <img src={product.image} alt={product.title} />
                    </ContainerImage>

                    <Content>
                        <Link to="/"><BsArrowLeftCircle /> Página Inicial</Link>
                        <h4>{product.title}</h4>
                        <p>R${product.cost}</p>
                        <button>Adicionar ao Carrinho</button>
                    </Content>
                </article>
            </Container>
        </>
    );
};
