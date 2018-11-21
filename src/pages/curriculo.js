import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Projects = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <h1 className="title has-text-light has-text-centered">Curriculo</h1>
        <div className="container">
            <section className="section is-size-4 is-size-5-touch">
                <div className="container content">
                    <h4 className="title has-text-light">Carlos Eduardo Acacio Carneiro{' '} <span role="img" aria-label="pc graficos e bandeira"></span></h4>
                    <p>
                    acaciosh@gmail.com | +55 85 986778994 | Fortaleza, CE, Brasil
                    </p>
                    <p>
                    Profissional com 4 anos de experiência no campo de Desenvolvimento de Sistemas, trabalhei em vários tipos de
                    projetos fazendo analise, especificando ou desenvolvendo aplicações web, serviços web, integrações de dados e
                    extrações de arquivos, todas usando .Net ou Java como principais linguagens de programação. Atualmente trabalho
                    como Analista Tecnico na CPQi Group usando .Net, fazendo uso de padrões de projetos modernos (DDD, TDD, Solid, Kiss,
                    CQRS, DRY, YAGNI, Arquitetura em Camadas, Arquitetura Hexagonal, Micro serviços).
                    </p>
                </div>
            </section>
            <hr />
            <section className="section is-size-4 is-size-5-touch">
                <div className="container content">
                    <p>
                    <b>Educação</b>
                    </p>
                    <p>
                    BACHARELADO EM SISTEMAS DA INFORMAÇÃO<br /> 
                    FACULDADE LOURENÇO FILHO – FLF<br />
                    Último Semestre – <a href="http://flf.edu.br/">(http://flf.edu.br/)</a>
                    </p>
                </div>
            </section>
            <hr />
            <section className="section is-size-4 is-size-5-touch">
                <div className="container content">
                    <p> 
                    <b>Experiências de Trabalho</b>
                    </p>
                    <p>
                    ANALISTA TECNICO | CPQI | ABRIL 2017 - ATUAL<br />
                    <a href="http://www.cpqi.com">(http://www.cpqi.com/)</a> <br /> <br />

                    Analista Técnico para um banco internacional em um projeto de desenvolvimento de integração
                    de sistemas legados usando .Net com Asp Net MVC e serviços Rest criados com AnypointStudio - Mulesoft.<br />
                    Palavras-chave: .Net, Mulesoft, Rest, Asp Net MVC, TSQL, Git.<br /> <br />

                    Analista Técnico para um banco internacional em projeto de desenvolvimento de um serviço
                    web de extração de relatórios com .Net, Web Api. Criação de telas CRUD. Migração de banco Sybase para MSSQL.
                    Procedimentos T-SQL que processam processos comerciais. <br />
                    Palavras-chave: .Net, DDD, TDD, MVC, Web Api, Entity Framework, Rest, T-SQL, SQL Server, Git.<br /> <br />

                    Analista Técnico para um banco internacional em um projeto de desenvolvimento de extrações
                    para produtos Bonds, FX, Forwards, Collateral, ACC/ACE e Swap usando procedimentos armazenados TSQL para
                    coletar informações dos sistemas Kondor + e BO brasileiros e enviá-los para vários sistemas de análise (3 meses). <br />
                    Palavras-chave: Java, Kondor +, CRK, FMS, Sybase, TSQL, Git.<br /><br />
                    
                    CONSULTOR INDEPENDENTE | DEZ 2017 – FEV 2018<br /><br />

                    Consultor na implantação de um projeto Asp .Net Web Api, Asp .Net MVC em cliente
                    internacional, apoiando criação de rotinas no servidor, configuração de ambiente, deploy, criação de stored procedures.<br />
                    Palavras-chave: Deploy, IIS, Stored Procedures, MVC, Web API.<br /><br />

                    Migração de sistema de relatórios em VB para C# .Net. Criação de nova arquitetura em camadas, criação de Web
                    API, remodelagem de dados, criação de novo layout usando CSS Materialize.<br />
                    Palavras-chave: .Net, DDD, MVC, Web Api, Entity Framework, Rest, T-SQL, SQL Server, TFS.<br /><br />

                    <b>Estágios, Bolsas e outras atividades</b> <br /><br />

                    ESTAGIARIO DE DESENVOLVIMENTO | CPQI | OUTUBRO 2016 – ABRIL 2017<br />
                    <a href="http://www.cpqi.com">(http://www.cpqi.com/)</a> <br /> <br />
                    
                    Desenvolvedor em um projeto de manutenção Kondor + para um banco internacional,
                    desenvolvendo personalizações, integrações e relatórios sobre o Kondor + 2.6 usando Java, T/SQL - (7 meses).
                    Tecnologias usadas: Java EE, T/SQL, Sybase.<br />
                    Palavras-chave: Kondor +, T / SQL, Git, Shell Script, Java, Money Market, Swap, ACC/ACE, FX.<br /><br />

                    ESTAGIARIO DE DESENVOLVIMENTO | ENEL (COELCE)| JUNHO 2015 – OUTUBRO 2016<br />
                    <a href="http://www.enel.com/">(http://www.enel.com/)</a> <br /> <br />

                    Analise e levantamento de requisitos, montagem, manutenção e manipulação de bancos de dados. 
                    Elaboração de relatórios gerenciais utilizando a linguagem Java, SQL e Microsoft Office Excel.
                    Mineração de dados, montagem de algoritmos para detecção de possíveis fraudes na rede elétrica.<br />
                    Palavras-chave: Java, T/SQL, Excel, Power BI. <br/>
                    </p>
                </div>
            </section>
            <p className="has-text-centered">
            Veja meus <Link to="/projects">projetos pessoais</Link>.
            </p>
        </div>
    </section>
  </Layout>
);

export default Projects;