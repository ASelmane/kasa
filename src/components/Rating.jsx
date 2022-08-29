import Star from '../star.svg';
import StarRate from '../star-rate.svg';
import "./Rating.css";

const Rating = ({ rating }) => {
    const rate = [1, 2, 3, 4, 5];
    
    return (
        <div className="rating">
            {rate.map((star, i) => (
                star <= rating ? (
                    <img className="star" src={StarRate} alt="star" key={i} />
                ) : (
                    <img className="star" src={Star} alt="star" key={i} />
                )
            ))}
        </div>
    );
}

export default Rating;