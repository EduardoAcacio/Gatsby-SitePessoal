import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import profileImage from '../assets/perfil.jpg'

const socialMedias = [
  { icon: 'fa-github', link: 'https://github.com/eduardoacacio' },
  { icon: 'fa-twitter', link: 'https://twitter.com/' },
  { icon: 'fa-medium', link: 'https://medium.com/' },
  { icon: 'fa-linkedin', link: 'https://linkedin.com/in/acacioeduardo' },
];

const IndexPage = () => (
  <Layout>
    <div className="container">
      <figure className="photo image is-128x128">
        <img className="is-rounded" src={profileImage} alt="Eduardo Acacio" />
      </figure>
      <h1 className="title has-text-light has-text-centered">Eduardo Acacio</h1>
      <h2 className="subtitle has-text-warning has-text-centered">
        Desenvolvedor Web
      </h2>
    </div>
    <div className="has-text-centered">
     {socialMedias.map(socialMedia => (
        <a 
           href={socialMedia.link} 
           key={socialMedia.icon} 
           aria-label={socialMedia.icon}
        >
          <span className="icon is-large">
            <i className={`fab fa2x ${socialMedia.icon}`} />
          </span>
        </a>
     ))}
    </div>
    <section className="section is-size-4 is-size-5-touch">
      <div className="container content">
        <h4 className="title has-text-light">Olá, sou Eduardo Acacio{' '} <span role="img" aria-label="pc graficos e bandeira">💻 🇧🇷</span></h4>
        <p>
          Sou desenvolvedor Web, trabalho como FullStack crirando aplicações e sistemas Web. 
          Gosto de estudar metodos ágeis, testes unitarios, JavaScript e Dotnet.
        </p>
        <p>
          Veja meus <Link to="/projects">projetos pessoais</Link>.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
