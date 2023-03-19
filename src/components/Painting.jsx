import PropTypes from 'prop-types';

import defaultImage from '../img/default-image.jpg';

export default function Painting({ imageUrl=defaultImage, title, author = "unknown", profileUrl, price, quantity }) {
  
    return <div>
        {/* true && 1 // 1
        false && 1 // false
        0 && 2 // 0
        true || 1 // true
        false || 1 // 1
        5 || 3 // 5
        0 || 3 // 3
        true ?? 3 // true
        1 ?? 3 // 3
        0 ?? 3 // 3
        undefined ?? 3 // 3
        null ?? 3 // 3 */}

  <img src = {imageUrl ?? defaultImage} alt={title} width="480" />
  <h2>{title}</h2>
  <p>
    Autor: <a href={profileUrl}>{author}</a>
  </p>
  <p>Price: {price} credits</p>
      <p>is in stock: {quantity < 10 ? 'run out soon' : 'are available'}</p>
  <button type="button">Add to Basket</button>
</div>
};

Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};