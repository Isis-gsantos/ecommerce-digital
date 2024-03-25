import { BsTelephone, BsEnvelope, BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";
import { Container, Subscribe, Services } from "./style";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

export const Footer = () => {
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (isValidEmail) {
            setMensagem("Inscrito");
        } else {
            setMensagem("Insira um email válido");
        }
    };

    return (
        <>
            <Container>
                <Subscribe>
                    <h2>DigitalHub Store</h2>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Se inscreva para saber das novidades em primeira mão!</label>

                        <div style={{ position: 'relative' }}>
                            <input
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                value={email}
                                autoComplete="off"
                                onChange={handleInputChange}
                            />
                            <button type="submit">
                                {mensagem === "Inscrito" ? (
                                    <>
                                        Inscrito <BsCheckLg />
                                    </>
                                ) : (
                                    "Se inscreva"
                                )}
                            </button>
                        </div>
                        {mensagem && <span style={{ color: mensagem === "Insira um email válido" ? "red" : "green" }}>{mensagem}</span>}
                    </form>
                </Subscribe>

                <Services>
                    <ul>
                        <h3>Links</h3>
                        <li>Política de Privacidade</li>
                        <li>Política de Reembolso</li>
                        <li>Política de Cancelamento</li>
                        <li>Termos de Serviço</li>
                        <li>FAQ</li>
                        <li>Minha conta</li>
                    </ul>

                    <ul>
                        <h3>Serviços</h3>
                        <li>Sobre nós</li>
                        <li>Lista de desejos</li>
                        <li>Cupons</li>
                        <li>Troca & Retornos</li>
                    </ul>

                    <ul>
                        <h3>Entre em contato</h3>
                        <li><BsTelephone /> 0000-0000</li>
                        <li><BsEnvelope />digitalhubstore@gmail.com</li>
                        <br></br>
                        <h3>Redes Sociais</h3>
                        <div>
                            <li><BsInstagram /></li>
                            <li><BsFacebook /></li>
                            <li><BsTiktok /></li>
                        </div>
                    </ul>
                </Services>
            </Container>
        </>
    );
};