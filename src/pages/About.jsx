import DropdownLarge from "../components/DropdownLarge";
import Banner from "../components/Banner";
import BannerImg from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg";

const About = () => {
    return (
        <div className="container about">
            <Banner img={BannerImg}></Banner>
            <DropdownLarge title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</DropdownLarge>
            <DropdownLarge title="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</DropdownLarge>
            <DropdownLarge title="Service">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</DropdownLarge>
            <DropdownLarge title="Sécurité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</DropdownLarge>
        </div>
    );
}

export default About;