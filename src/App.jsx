import { Route, Routes } from "react-router-dom";
import DashboardPage from './view/DashboardPage.jsx'
import Invoices from "./view/invoices.jsx";
import Companies from "./view/companies.jsx";
import Contacts from "./view/contacts.jsx";
import { ShowContacts } from "./view/showContacts.jsx";
import ShowCompany from './view/showCompany.jsx';
import { ShowInvoices } from "./view/showInvoices.jsx";

import Header from "./partials/header.jsx";
import ModalLogin from './components/modalLogin.jsx';
import ModalRegister from "./components/ModalRegister.jsx";

import '../src/assets/css/style.css'
import { HomePage } from './view/HomePage.jsx';

import { useContext, useEffect } from "react";
import { ApiContext } from "./context/ApiContext.jsx";

import { useState } from "react";


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

    // console.log('contacts : ', contacts);
    // console.log('companies : ', companies);
    // console.log('invoices : ', invoices);
    // console.log('types : ', types);
  const [openModal, setOpenModal] = useState('');

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Header setOpenModal={setOpenModal} />
            {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} />}
            {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
            <HomePage />
          </>
        } />
        <Route path="contacts" element={
          <>
            <Header setOpenModal={setOpenModal} />
            {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} />}
            {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
            <Contacts />
          </>
        } />
        <Route path="companies" element={
          <>
            <Header setOpenModal={setOpenModal} />
            {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} />}
            {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
            <Companies />
          </>
        } />
        <Route path="invoices" element={
          <>
            <Header setOpenModal={setOpenModal} />
            {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} />}
            {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
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
            <Header setOpenModal={setOpenModal} />
            {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} />}
            {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
            <ShowContacts />
          </>
        }/>
        <Route path='ShowCompany/:id' element={
          <>
            <Header setOpenModal={setOpenModal} />
            {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} />}
            {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
            <ShowCompany />
          </>
        }/>
        <Route path='ShowInvoices/:id' element={
          <>
            <Header setOpenModal={setOpenModal} />
            {openModal === 'login' && <ModalLogin closeModal={() => setOpenModal('')} />}
            {openModal === 'register' && <ModalRegister closeModal={() => setOpenModal('')} />}
            <ShowInvoices />
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
