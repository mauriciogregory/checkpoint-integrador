import {  useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './style.scss';

export default function DisplayProduct({ data }) {
    let navigate = useNavigate();

    function handleNavigateToProductDetail(id) {
        navigate(`/${id}`);
    }

    return (
        <Card className="diplay-product">
            <Card.Img src={data.image} alt="" />
            <Card.Body className="box-info">
                <Card.Title className="text-capitalize">{data.title}</Card.Title>
                <Card.Text>R${data.price}</Card.Text>
                <Button className="button-detail" onClick={() => handleNavigateToProductDetail(data.id)}>Exibir detalhes</Button>
            </Card.Body>
        </Card>
    )
}