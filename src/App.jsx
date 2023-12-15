import '../src/assets/css/style.css';

import { UserProvider, UserContext } from './assets/utils/UserContext.jsx';

import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import Header from "./partials/header.jsx";
import ModalLogin from './components/modalLogin.jsx';
import ModalRegister from "./components/ModalRegister.jsx";
import Logoff from './assets/utils/Logoff.jsx';

import { HomePage } from './view/HomePage.jsx';
import DashboardPage from './view/DashboardPage.jsx';
import Invoices from "./view/invoices.jsx";
import Companies from "./view/companies.jsx";
import Contacts from "./view/contacts.jsx";
import { ShowContacts } from "./view/showContacts.jsx";
import ShowCompany from './view/showCompany.jsx';
import { ShowInvoices } from "./view/showInvoices.jsx";

import { ApiContext } from "./context/ApiContext.jsx";



function App() {
  
  const {fetchContacts, contacts, fetchCompanies, companies, fetchInvoices, invoices, fetchTypes, types} = useContext(ApiContext);

    useEffect(() => {
      const fetchData = async () => {
        if (!contacts) {
          await fetchContacts();
        } 
        if (!companies) {
          await fetchCompanies();
        } 
        if (!invoices) {
          await fetchInvoices();
        } 
        if (!types) {
          await fetchTypes();
        } 
      };
        
      fetchData();
    }, []);

  const [openModal, setOpenModal] = useState('');

  const navigate=useNavigate();
  
  const { user, setUser, mockLogin } = useContext(UserContext);

  return (
    <UserProvider>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Header user={user} setUser={setUser} setOpenModal={setOpenModal} />
              {user  ? (
                <>
                {(user.role_id === 1 || user.role_id===2) && (
                  <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                )}
                  <Logoff setUser={setUser}/>
                </>
              ) : (
                <>
                {openModal === 'login' &&   <ModalLogin closeModal={() => setOpenModal('')} mockLogin={mockLogin} />}
                {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
                </>
              )}
              <HomePage />
            </>
          } />
          <Route path="contacts" element={
            <>
              <Header user={user} setUser={setUser} setOpenModal={setOpenModal} />
              {user  ? (
                <>
                {(user.role_id === 1 || user.role_id===2) && (
                  <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                )}
                  <Logoff setUser={setUser}/>
                </>
              ) : (
                <>
                {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} mockLogin={mockLogin} />}
                {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
                </>
              )}
              <Contacts />
            </>
          } />
          <Route path="companies" element={
            <>
              <Header user={user} setUser={setUser} setOpenModal={setOpenModal} />
              {user  ? (
                <>
                {(user.role_id === 1 || user.role_id===2) && (
                  <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                )}
                  <Logoff setUser={setUser}/>
                </>
              ) : (
                <>
                {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} mockLogin={mockLogin} />}
                {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
                </>
              )}
              <Companies />
            </>
          } />
          <Route path="invoices" element={
            <>
              <Header user={user} setUser={setUser} setOpenModal={setOpenModal} />
              {user  ? (
                <>
                {(user.role_id === 1 || user.role_id===2) && (
                  <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                )}
                  <Logoff setUser={setUser}/>
                </>
              ) : (
                <>
                {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} mockLogin={mockLogin} />}
                {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
                </>
              )}
              <Invoices />
            </>
          } />
          <Route path="dashboard" element={
            <>
              <DashboardPage />
            </>
          } />
          <Route path='showContacts/:id' element={
            <>
              <Header user={user} setUser={setUser} setOpenModal={setOpenModal} />
              {user  ? (
                <>
                {(user.role_id === 1 || user.role_id===2) && (
                  <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                )}
                  <Logoff setUser={setUser}/>
                </>
              ) : (
                <>
                {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} mockLogin={mockLogin} />}
                {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
                </>
              )}
              <ShowContacts />
            </>
          }/>
          <Route path='ShowCompany/:id' element={
            <>
              <Header user={user} setUser={setUser} setOpenModal={setOpenModal} />
              {user  ? (
                <>
                {(user.role_id === 1 || user.role_id===2) && (
                  <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                )}
                  <Logoff setUser={setUser}/>
                </>
              ) : (
                <>
                {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} mockLogin={mockLogin} />}
                {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
                </>
              )}
              <ShowCompany />
            </>
          }/>
          <Route path='ShowInvoices/:id' element={
            <>
              <Header user={user} setUser={setUser} setOpenModal={setOpenModal} />
              {user  ? (
                <>
                {(user.role_id === 1 || user.role_id===2) && (
                  <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
                )}
                  <Logoff setUser={setUser}/>
                </>
              ) : (
                <>
                {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} mockLogin={mockLogin} />}
                {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
                </>
              )}
              <ShowInvoices />
            </>
          }/>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;