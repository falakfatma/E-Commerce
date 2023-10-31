export default function Card ({key,description,image,title,price,rating,category,id}){
  return(
    
      <div className="card">
        <img src={image} alt="Card 1" />
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{category}</p>
        <p>{rating}</p>
        <p>{description}</p>
      
    </div>
  )
}