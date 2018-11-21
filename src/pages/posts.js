import React from 'react';

import Layout from '../components/layout';
import Card from '../components/card';
import postImage from '../assets/dotnet.png';

const postCards = [
  {
    title: 'Iniciando na programação com Dotnet',
    subtitle: 'Guia basico de desenvolvimento usando C# e .Net',
    link:
      'https://medium.com/',
    imageLink: postImage,
    tags: ['.Net','Core','Asp .Net','C#'],
  },
];

const Posts = () => (
  <Layout>
    <section className="section">
      <h1 className="title has-text-light has-text-centered">Posts</h1>
      <div className="container">
        <hr />
        <div className="columns is-centered">
          <div className="column is-half">
            {postCards.map(postCard => (
              <Card key={postCard.title} {...postCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Posts;