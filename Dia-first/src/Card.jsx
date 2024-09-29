

const Card = ({data:{title, price, description, image}}) => {
    
  return (
    <div className="card">
            <img src={image} alt="img" />
            <h3>{title}</h3>
            <p><i>{description}</i></p>
            <p><b>Price $ {price}</b></p>
        </div>
  )
}

export default Card