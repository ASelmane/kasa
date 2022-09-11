import Dropdown from "../components/Dropdown";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import Carrousel from "../components/Carrousel";
import data from "../data/data.json";
import { useParams, Navigate } from "react-router-dom";
import "../styles/Logement.css";

const Logement = () => {
    const { id } = useParams();
    const logementId = data.find((logement) => logement.id === id);
    if (!logementId) {
        return <Navigate to="/not-found" />;
    }
    const { title, pictures, description, host, rating, location, equipments, tags } = logementId;

    return (
        <div className="container">
            <Carrousel>{pictures}</Carrousel>
            <div className="logement">
                <div className="logement__info-left">
                    <h1 className="logement__title">{title}</h1>
                    <p className="logement__location">{location}</p>
                    <div className="logement__tags">
                        {tags.map((tag, i) => (
                            <Tag key={i}>{tag}</Tag>
                        ))}
                    </div>
                </div>
                <div className="logement__info-right">
                    <div className="logement__host">
                        <h3>{host.name}</h3>
                        <img src={host.picture} alt={host.name}/>
                    </div>
                    <Rating rating={rating}/>
                </div>
            </div>
            <div className="logement__info">
                <Dropdown title="Description">{description}</Dropdown>
                <Dropdown title="Equipements">{equipments}</Dropdown>
            </div>
        </div>
    );
}

export default Logement;