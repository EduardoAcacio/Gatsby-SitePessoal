import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Card from '../components/card';
import projectImage from '../assets/1.png';
import projectImage2 from '../assets/2.png';
import projectImage3 from '../assets/3.png';
import projectImage4 from '../assets/4.png';

const projectCards = [
  {
    title: 'Curso de Gatsby',
    subtitle: 'Crie seu site pessoal usando React',
    link: 'https://github.com/luanorlandi/gatsby-course',
    imageLink: projectImage,
    tags: ['Gatsby', 'React'],
  },
  {
    title: 'Tic-tac-porg',
    subtitle: 'Jogo da Velha com tema de Star Wars',
    link: 'https://luanorlandi.github.io/tic-tac-porg',
    imageLink: projectImage2,
    tags: ['React', 'PWA'],
  },
  {
    title: 'Memepool',
    subtitle: 'Bot do Discord que toca sons de memes',
    link: 'https://github.com/luanorlandi/memepool',
    imageLink: projectImage3,
    tags: ['Node', 'Heroku'],
  },
  {
    title: 'Westworld Intro Creator',
    subtitle: 'Crie sua intro do Westworld personalizada',
    link: 'https://westworldintrocreator.kassellabs.io/',
    imageLink: projectImage4,
    tags: ['React'],
  },
];

const Projects = () => (
  <Layout>
    <section className="section is-size-5-desktop is-size-6-touch">
      <h1 className="title has-text-light has-text-centered">Projetos</h1>
        <div className="container">
        <hr />
        <p className="has-text-centered">
          Alguns dos meus projetos de destaque, veja mais no meu{' '}
          <a href="https://github.com/eduardoacacio">GitHub</a>.
        </p>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            {projectCards.map(projectCard => (
              <Card key={projectCard.title} {...projectCard} />
            ))}
          </div>
        </div>
        <p className="has-text-centered">
          Veja meu <Link to="/curriculo">curriculo</Link>.
        </p>
      </div>
    </section>
  </Layout>
);

export default Projects;