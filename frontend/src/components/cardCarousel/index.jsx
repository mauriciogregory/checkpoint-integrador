import './style.scss'
import { Card, Button } from 'react-bootstrap'

export default function CardCarousel(){
    return(
        <div className="cards">
        <Card className="card-carousel" style={{ width: '18rem' }}>
            <Card.Img className="card-img" variant="top" src="https://static.mundomax.com.br/produtos/54749/550/1.webp" />
            <Card.Body>
                <Card.Title>Instrumento</Card.Title>
                <Card.Text>
                preço
                </Card.Text>
                <Button variant="primary">comprar</Button>
            </Card.Body>
        </Card>
        </div>
    )
}