// import Painting from "./Painting";

// function PaintingList({ items }) {
//     <ul>
//         {items.map(item => (
//             <li>
//                     <Painting
//                         key={item.id}
//                         imageUrl={item.url}
//                         title={item.title}
//                         author={item.author.tag}
//                         profileUrl={item.author.url}
//                         price={item.price}
//                         quantity={item.quantity} />

//             </li>
//         ))}
//     </ul>
// }

// export default PaintingList;


// будет ошибка react_devtools_backend.js:2655 Warning: Each child in a list should have a unique "key" prop., тк ключ должен стоять в li
// ============================================

import Painting from "./Painting";
import PropTypes from "prop-types"

function PaintingList({ items }) {
    return (<ul>
        {items.map(item => (
            <li key={item.id}>
                <Painting
                        
                    imageUrl={item.url}
                    title={item.title}
                    author={item.author.tag}
                    profileUrl={item.author.url}
                    price={item.price}
                    quantity={item.quantity} />
                
            </li>
        ))}
    </ul>);
    
};
PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
};

export default PaintingList;