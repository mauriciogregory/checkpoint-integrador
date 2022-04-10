import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import FooterDown from '../../components/footerdown/index'
import CarouselComponent from '../../components/carousel/index'

export default function Home() {
    return (
        <div>
            <Header />
            <CarouselComponent/>
            <Footer />
            <FooterDown />
        </div>
    )
}