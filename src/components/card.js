const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  //card
  const card = document.createElement('div');
  card.classList.add('card');
  //headline
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;
  card.appendChild(headline);
  //author
  const author = document.createElement('div');
  author.classList.add('author');
  card.appendChild(author);
  //photo
  const imgContainer =  document.createElement('div');
  imgContainer.classList.add('img-container');
  const authorImg = document.createElement('img');
  authorImg.src = article.authorPhoto;
  imgContainer.appendChild(authorImg);
  author.appendChild(imgContainer);
  //author name
  const authorName = document.createElement('span');
  authorName.textContent = `By ${article.authorName}`;
  author.appendChild(authorName);
  return card;
}

import axios from 'axios';
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
  .then(resp => {
    const articles = resp.data.articles;
    Object.entries(articles).forEach(elem =>{
      elem[1].forEach(elem => {
        document.querySelector(selector).appendChild(Card(elem));
      })
    })
  })
  .catch(err => {
    console.log(err);
  })
}

export { Card, cardAppender }
