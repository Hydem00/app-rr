import React from 'react';
import Article from '../components/Article'

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, animi. Quia placeat neque, architecto itaque illo temporibus delectus maiores, unde nesciunt voluptate vero cumque incidunt dignissimos omnis dolores mollitia impedit."
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Ania Kwiatkowska",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, animi. Quia placeat neque, architecto itaque illo temporibus delectus maiores, unde nesciunt voluptate vero cumque incidunt dignissimos omnis dolores mollitia impedit."
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, animi. Quia placeat neque, architecto itaque illo temporibus delectus maiores, unde nesciunt voluptate vero cumque incidunt dignissimos omnis dolores mollitia impedit."
  },
]

const HomePage = () => {
  
  const artList = articles.map(article => (
    <Article key={article.id} {...article}/>
  ))
  return ( 
    <div className='home'>
      {artList}
    </div>
   );
}
 
export default HomePage;