import { Link, useParams } from "react-router-dom";
import { Products } from "../components/products";
import { Container, ContainerImage, Content } from "./style-product-page";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Navbar } from "../components/head/navbar";
import { dataProducts } from "../components/main-content";

export const ProductPage = () => {
    const { id } = useParams<{ id: string }>();

    // Aqui, vamos percorrer cada matriz de produtos corretamente e encontrar o produto com base no ID
    let product: Products | undefined;
    dataProducts.forEach((products) => {
        products.forEach((item) => {
            if (item.id === id) {
                product = item;
            }
        });
    });

    // Verifique se o produto foi encontrado antes de tentar acessar seus campos
    if (!product) {
        return (
            <>
                <div>Produto não encontrado</div>
                <Link to="/"></Link>
            </>
        );
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



// const { category, id } = useParams<{ category: string; id: string }>();
// let product: Products | undefined | null;

// switch (category) {
//     case '0':
//         product = dataPhones.find(item => item.id === id);
//         break;
//     case '1':
//         product = dataHeadphones.find(item => item.id === id);
//         break;
//     case '2':
//         product = dataWatch.find(item => item.id === id);
//         break;
//     default:
//         product = null;
//         break;
// }

// if (!product) {
//     return <div>Produto não encontrado</div>;
// }