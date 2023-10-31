import Card from './Card';

export default function Cards() {
  let cardsArray = [{

    title: "JumpSuit",
    description: "This is the first card",
    image: "https://cdn.pixabay.com/photo/2020/10/23/16/50/woman-5679284_1280.jpg",
    link: "https://www.google.com/",
    price: 345,
    rating: 4.5,
    category: "Cards",
    id: 0
  },
  {

    title: "Card 1",
    description: "This is the first card",
    image: "https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg",
    link: "https://www.google.com/",
    price: 345,
    rating: 4.5,
    category: "Cards",
    id: 0
  },
  {

    title: "Card 1",
    description: "This is the first card",
    image: "https://cdn.pixabay.com/photo/2018/02/24/20/41/woman-3179182_1280.jpg",
    link: "https://www.google.com/",
    price: 345,
    rating: 4.5,
    category: "Cards",
    id: 0
  },
  {
    title: "Card 1",
    description: "This is the first card",
    image: "https://cdn.pixabay.com/photo/2016/04/16/19/51/girl-1333640_1280.jpg",
    link: "https://www.google.com/",
    price: 345,
    rating: 4.5,
    category: "Cards",
    id: 0
  },
  {
    title: "Card 1",
    description: "This is the first card",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    link: "https://www.google.com/",
    price: 345,
    rating: 4.5,
    category: "Cards",
    id: 0

  },
  {

    title: "Card 1",
    description: "This is the first card",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    link: "https://www.google.com/",
    price: 345,
    rating: 4.5,
    category: "Cards",
    id: 0
  },
  {
    title: "Card 1",
    description: "This is the first card",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    link: "https://www.google.com/",
    price: 345,
    rating: 4.5,
    category: "Cards",
    id: 0
  },]
  return (
    <div className="cardsContainer">
      <h1 className='TopicHeading'>Exclusive Offer</h1>
      <div className="cards">
        {cardsArray.map((e) => {
          return <Card
            key={e.id}
            image={e.image}
            title={e.title}
            price={e.price}
            rating={e.rating}
            category={e.category}
            description={e.description}
            id={e.id}
          />
        })}
      </div>
    </div>
  )
}