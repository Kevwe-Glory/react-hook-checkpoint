import Card from 'react-bootstrap/Card';



const MovieCard = ({mList}) => {
  const {img, title, description, rating, posterURL} = mList
  return (
    <>    
        <div >                        
            <Card style={{ width: '20rem', height:'830px', margin:'0.5rem',  }}>
                <Card.Img variant="top" src={img} alt="movie picture"  style={{height:'32vw', objectFit:'cover'}} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Rating: {rating}star</Card.Text>
                    <Card.Link href={posterURL}>Watch</Card.Link>
                </Card.Body>
            </Card>
        </div>       
    </>
    
  )
}

export default MovieCard


