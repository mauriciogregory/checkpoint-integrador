import './style.scss'
import { Container } from 'react-bootstrap'

const dados = [
    {
        id: 1,
        name: 'Vinícius',
        description: 'Full-stack developer',
        url: 'https://avatars.githubusercontent.com/u/83615159?v=4'
    },
    {   
        id: 2,
        name: 'Maurício',
        description: 'Full-stack developer',
        url: 'https://avatars.githubusercontent.com/u/33768118?v=4'
    },
    {
        id: 3,
        name: 'William',
        description: 'Full-stack developer',
        url: 'https://avatars.githubusercontent.com/u/85083548?v=4'
    },
    {
        id: 4,
        name: 'Guilherme',
        description: 'Full-stack developer',
        url: 'https://avatars.githubusercontent.com/u/85465349?v=4'
    },
    {
        id: 5,
        name: 'Maycon',
        description: 'Full-stack developer',
        url: 'https://avatars.githubusercontent.com/u/53102048?v=4'
    }
];

export default function CardAbout() {
    return(
        <Container>
        <div className="cards-about">
        {dados.map( ( {id, name, description, url} ) => (
        <div key={id} className="card-about-container">
            <div className="img-container">
                <img className="card-img-about" src={url} alt={description} />
            </div>
            <div className='title-container'>
                <h3 className='card-title'>{name}</h3>
            </div>
            <div className='description-container'>
                <p className='card-description'>{description}</p>
            </div>
            <div className='text-container'>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci eaque doloremque? Aperiam, maxime laborum molestiae officia nulla odit dolores itaque, quasi similique veritatis accusantium soluta numquam cum quidem ipsum?</p>
            </div>
        </div>
        ))}
        </div>
        </Container>
    )

}
