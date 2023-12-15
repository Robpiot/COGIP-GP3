import { useContext } from 'react';
import { UserContext } from './UserContext';

function Logoff() {
  const { setUser } = useContext(UserContext);

  const logoff = () => {
    setUser(null);
  };

  return (
    <button onClick={logoff}>
      Log off
    </button>
  );
}

export default Logoff;