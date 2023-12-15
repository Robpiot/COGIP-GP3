import { useContext } from 'react';
import { UserContext } from './UserContext';

function Logoff() {
  const { setUser } = useContext(UserContext);

  const logoff = () => {
    setUser(null);
  };

  return (
    <button className="logoffbtn" onClick={logoff}>
      Logoff
    </button>
  );
}

export default Logoff;