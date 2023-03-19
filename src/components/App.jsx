// const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
// export default
// ===============================================================

// import Painting from './Painting';
// import paintings from '../paintings.json'

// export default function App() {
//   // const isOnline = true;

//   return (<div>

//     {/* [1,2,3,4,5]  */}

//     {/* {[1, 2, 3, 4, 5]} */}
//     {[1, 2, 3, 4, 5].map(el => (<div>{el}</div>
//       ))}

//      {/* {isOnline && 'Online'}

//     {isOnline ? 'Online' : 'Offline'}  */}

//     {/* <Painting
//     // imageUrl={paintings[0].url}
//       title={paintings[0].title}
//       author={paintings[0].author.tag}
//       profileUrl={paintings[0].author.url}
//       price={paintings[0].price}
//       quantity={paintings[0].quantity} />
//     <Painting
//       imageUrl={paintings[1].url}
//       title={paintings[1].title}
//       author={paintings[1].author.tag}
//       profileUrl={paintings[1].author.url}
//       price={paintings[1].price}
//       quantity={paintings[1].quantity} />
//     <Painting
//       imageUrl={paintings[2].url}
//       title={paintings[2].title}
//       author={paintings[2].author.tag}
//       profileUrl={paintings[2].author.url}
//       price={paintings[2].price}
//       quantity={paintings[2].quantity} /> */}
//   </div>);
// };

// =====================================================

// import Painting from './Painting';
// import paintings from '../paintings.json'

// export default function App() {
//   // const isOnline = true;

//   return (<div>
//     {paintings.map(painting => (
//       <Painting
//         imageUrl={painting.url}
//         title={painting.title}
//         author={painting.author.tag}
//         profileUrl={painting.author.url}
//         price={painting.price}
//         quantity={painting.quantity} />
//     ))}
//   </div>);
// };

// =====================================================
//  don't forget key={painting.id}

// import Painting from './Painting';
// import paintings from '../paintings.json'

// export default function App() {
//   // const isOnline = true;

//   return (<div>
//     {paintings.map(painting => (
//       <Painting
//         key={painting.id}
//         imageUrl={painting.url}
//         title={painting.title}
//         author={painting.author.tag}
//         profileUrl={painting.author.url}
//         price={painting.price}
//         quantity={painting.quantity} />
//     ))}
//   </div>);
// };

// ==========================================

import paintings from '../paintings.json';
import Section from './Section';
import PaintingList from './PaintingList';

export default function App() {
  return (<div>
    
    <Section title="Week Top" ><PaintingList items={paintings} /></Section>
    <Section title='The best'><PaintingList items={paintings} /></Section>
  </div>);
};