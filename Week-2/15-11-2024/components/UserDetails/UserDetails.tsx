import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../types/user';
import '../styles/userDetails/userList.css';
import UserCard from './UserCard';

const UserDetails: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://reqres.in/api/users/');
                setUsers(response.data.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to Fetch...');
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    id={user.id}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    email={user.email}
                    avatar={user.avatar}
                />
            ))}
        </div>
    );
};

export default UserDetails;
