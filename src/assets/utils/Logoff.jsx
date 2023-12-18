import { useContext } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

function Logoff() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogoff = () => {
    setUser(null);
    navigate('/'); // Redirect to HomePage
  };

  return (
    <button className="logout logoutDash" onClick={handleLogoff}>
      Logout
    </button>
  );
}

export default Logoff;