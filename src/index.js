// // import React from "react";
// import ReactDOM from 'react-dom/client';

// // const elem1 = React.createElement('span', { children: `Hallo` });
// const elem1 = <span>Hallo</span>
// // const elem2 = React.createElement('span',  {children: `World`});
// const elem2 = <span>World</span>
// // const element = React.createElement('div', {
// //   // a: 5, b: 10, c: 15, children: [elem1, ` `, elem2]
// //   a: 5, b: 10, c: 15, children: `Hallo World`
// // }, );

// // const jsxElement = <div>Hello World</div>
// const jsxElement = <div>{elem1} {elem2}</div>

// // console.log(element);
// console.log(jsxElement);

// // ReactDOM.createRoot(document.getElementById('root')).render(element);
// ReactDOM.createRoot(document.getElementById('root')).render(jsxElement);

// ========================================================================
// import ReactDOM from 'react-dom/client';

// const data = {
//   id: 'id-1',
//  url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers, Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'htpps://pixabay.com/users/ractapopulous-24766/'
//   },
//   quantity: 10,
// };

// const painting =(
//   <div>
//     <img src = {data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Autor: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Price: {data.price} credits</p>
//     <p>is in stock: {data.quantity}</p>
//     <button type="button">Add to Basket</button>
//   </div>
// );
// console.log(painting);
// ReactDOM.createRoot(document.getElementById('root')).render(painting);

// ======================================================================

// import ReactDOM from 'react-dom/client';
// import paintings from './paintings.json';

// const data = paintings[0];

// // const painting =(
// //   <div>
// //     <img src = {data.url} alt={data.title} width="480" />
// //     <h2>{data.title}</h2>
// //     <p>
// //       Autor: <a href={data.author.url}>{data.author.tag}</a>
// //     </p>
// //     <p>Price: {data.price} credits</p>
// //     <p>is in stock: {data.quantity}</p>
// //     <button type="button">Add to Basket</button>
// //   </div>
// // );


// function Painting (props) {
//   console.log(props);
//   return <div>
//   <img src = {data.url} alt={data.title} width="480" />
//   <h2>{data.title}</h2>
//   <p>
//     Autor: <a href={data.author.url}>{data.author.tag}</a>
//   </p>
//   <p>Price: {data.price} credits</p>
//   <p>is in stock: {data.quantity}</p>
//   <button type="button">Add to Basket</button>
// </div>
// };


// // ReactDOM.createRoot(document.getElementById('root')).render(<Painting a="5" b={10} c={{d: 10}} />);
// ReactDOM.createRoot(document.getElementById('root')).render(<Painting url={data.url} title={data.title}  />);

// =========================================================================

// import ReactDOM from 'react-dom/client';
// import paintings from './paintings.json';

// const painting = paintings[1];

// function Painting (props) {
//   const {url, title, author, profileUrl, price, quantity} = props;
//   console.log(props);
//   return <div>
//   <img src = {url} alt={title} width="480" />
//   <h2>{title}</h2>
//   <p>
//     Autor: <a href={profileUrl}>{author}</a>
//   </p>
//   <p>Price: {price} credits</p>
//   <p>is in stock: {quantity}</p>
//   <button type="button">Add to Basket</button>
// </div>
// };

// ==================================================

// import ReactDOM from 'react-dom/client';
// import paintings from './paintings.json';

// const painting = paintings[1];

// function Painting ({url, title, author, profileUrl, price, quantity}) {
  
//   return <div>
//   <img src = {url} alt={title} width="480" />
//   <h2>{title}</h2>
//   <p>
//     Autor: <a href={profileUrl}>{author}</a>
//   </p>
//   <p>Price: {price} credits</p>
//   <p>is in stock: {quantity}</p>
//   <button type="button">Add to Basket</button>
// </div>
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<Painting url={painting.url} title={painting.title} author={painting.author.tag} profileUrl={painting.author.url} price={painting.price} quantity={painting.quantity} />);
// =========================================================

// делаем папку component и в ней файл App.js, app.js, App.jsx или app.jsx разницьі нет никакой..... делаем там експорт дефолт функции и описьіваем функцию, затем импортируем сюда...


import ReactDOM from 'react-dom/client';
import App from 'components/App';




ReactDOM.createRoot(document.getElementById('root')).render(<App />);










// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
