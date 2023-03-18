
export default function Painting({ url, title, author = "unknown", profileUrl, price, quantity}) {
  
  return <div>
  <img src = {url} alt={title} width="480" />
  <h2>{title}</h2>
  <p>
    Autor: <a href={profileUrl}>{author}</a>
  </p>
  <p>Price: {price} credits</p>
  <p>is in stock: {quantity}</p>
  <button type="button">Add to Basket</button>
</div>
};