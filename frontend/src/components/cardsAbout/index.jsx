import './style.scss'
import { Container } from 'react-bootstrap'
import data from '../../data'

export default function CardAbout() {

    function goToLink(link) {
        window.open(link, '_blank')
    }

    return(
        <Container>
        <div className="cards-about">
        {data.map( ( {id, name, description, url, linkedin} ) => (
        <div key={id} className="card-about-container">
            <div className="img-container">
                <img className="card-img-about" onClick={() => goToLink(linkedin)} src={url} alt={description} />
            </div>
            <div className='title-container'>
                <h3 className='card-title-about'>{name}</h3>
            </div>
            <div className='description-container'>
                <p className='card-description'>{description}</p>
            </div>
            <div className='text-container'>
                <p className='card-text-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci eaque doloremque? Aperiam, maxime laborum molestiae officia nulla odit dolores itaque, quasi similique veritatis accusantium soluta numquam cum quidem ipsum?</p>
            </div>
        </div>
        ))}
        </div>
        </Container>
    )

}
