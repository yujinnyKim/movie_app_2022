import React from 'react';

function Food({name, picture}){
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>
  );
}
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:'https://www.seriouseats.com/thmb/m16sray_HxYpJebVbXMxv906bhk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210527-baechu-kimchi-vicky-wasik-seriouseats-seriouseats-3-18a2d6d7d1d74a7a82cb13ed350218be.jpg',
    rating: 5,
  },
    {
      id: 2,
    name: 'Samgyeopsal',
    image:'https://i.ytimg.com/vi/23tRGHUX3qM/maxresdefault.jpg',
    rating: 5,
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}
export default App;