import { User } from '../types/user';
import '../styles/userDetails/userCard.css';
const UserCard: React.FC<User> = ({ first_name, last_name, email, avatar }) => {
    return (
        <div className="user-card">
            <img src={avatar} alt="" className="user-card_img" />
            <div className="user-card_info">
                <h2 className="user-card_name">
                    {first_name} {last_name}
                </h2>
                <p className="user-card_email">{email}</p>
            </div>
        </div>
    );
};
export default UserCard;
