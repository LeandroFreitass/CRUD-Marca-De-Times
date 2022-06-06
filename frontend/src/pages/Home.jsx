import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import TitleSection from "../components/TitleSection/TitleSection";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <TitleSection
        title="Produtos"
        sub="Especializada em camisas de futebol e artigos esportivos, 
        a loja virtual surgiu em 2012 na cidade de Presidente Prudente (SP) 
        e reúne uniformes completos dos mais variados clubes brasileiros, 
        internacionais e seleções - dos mais consagrados aos menos conhecidos. 
        Com a maior variedade em camisas de times de futebol no mercado nacional, 
        a FutFanatics trabalha em parceria com as principais marcas esportivas 
        para comercializar somente produtos originais e com garantia de qualidade. 
        Além disso, a loja possui certificados de segurança que oferecem ao cliente um ambiente de compra confiável."
      />
    </>
  );
};

export default Home;
