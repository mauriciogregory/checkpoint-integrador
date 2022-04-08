import './style.scss'
import { Card, Button } from 'react-bootstrap'
import { GrCart } from 'react-icons/gr';

export default function CardCarousel(){
    return(
        <div className="cards">
        <Card className="card-carousel" style={{ width: '18rem' }}>
            <Card.Img className="card-img" variant="top" src="https://static.mundomax.com.br/produtos/54749/550/1.webp" />
            <Card.Body>
                <Card.Title className='card-title'>Violão</Card.Title>
                <Card.Text className='card-text'>
                312.90
                </Card.Text>
                <Button className="card-buy-button">{<GrCart/>}</Button>
            </Card.Body>
        </Card>
        </div>
    )
}