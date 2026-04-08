"use client";

import styles from "./_components/layoutCss/Layout.module.css";
import stylesFooter from "./_components/layoutCss/Footer.module.css"
import Navbar from "./_components/Navbar/Navbar";
import { usePathname } from "next/navigation";
import { CategoryProvider } from "./_components/Navbar/CategoryContext";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideNavbar = pathname.startsWith("/auth");

    return (
        <CategoryProvider>
        
            <div className={styles.layoutTotal}>
                <div className={styles.layoutPrincipal}>
                    {!hideNavbar && <Navbar />}
                    
                    {children}
                </div>

                <div className={styles.footer}>
                    <div className={stylesFooter.footerContent}>
                
                        <div className={stylesFooter.coluna}>
                            <h4>Cadastre-se para receber novidades</h4>
                            <ul>
                                <li><a href="#">Encontre uma loja Athenas sport</a></li>
                                <li><a href="#">Black Friday Athenas sport</a></li>
                                <li><a href="#">Cartão presente</a></li>
                                <li><a href="#">Mapa do site</a></li>
                                <li><a href="#">Guia de produtos</a></li>
                                <li><a href="#">Acompanhe seu pedido</a></li>
                                <li><a href="#">Vendas corporativas</a></li>
                            </ul>
                        </div>

                        <div className={stylesFooter.coluna}>
                            <h4>Ajuda</h4>
                            <ul>
                                <li><a href="#">Dúvidas gerais</a></li>
                                <li><a href="#">Encontre seu tamanho</a></li>
                                <li><a href="#">Entregas</a></li>
                                <li><a href="#">Pedidos</a></li>
                                <li><a href="#">Devoluções</a></li>
                                <li><a href="#">Pagamentos</a></li>
                                <li><a href="#">Produtos</a></li>
                                <li><a href="#">Corporativo</a></li>
                                <li><a href="#">Fale conosco</a></li>
                                <li><a href="#">Relatar problema</a></li>
                            </ul>
                        </div>

                        <div className={stylesFooter.coluna}>
                            <h4>Sobre a Athenas sport</h4>
                            <ul>
                                <li><a href="#">Propósito</a></li>
                                <li><a href="#">Sustentabilidade</a></li>
                            </ul>
                        </div>

                    </div>
                    
                    <div className={stylesFooter.footerBottom}>
                        <div className={stylesFooter.links}>
                            <a href="#">Política de privacidade</a>
                            <a href="#">Política de cookies</a>
                            <a href="#">Termos de uso</a>
                        </div>
                        
                        <div className={stylesFooter.copyright}>
                            © 2026 ATHENAS sport. Todos os direitos reservados. Fisia Comércio de Produtos Esportivos Ltda - CNPJ: 23.443.212/0041-32 Universidade Federal do Espírito Santo, S/N Km 555.7 - Eixo 3 - CEP 12.23.1234 - São Mateus - ES
                        </div>
                    </div>
                    
                </div>
            </div>
        </CategoryProvider>
    );
}