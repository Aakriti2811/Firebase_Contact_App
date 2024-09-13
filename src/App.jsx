import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import contact from "./assets/Hands Contact.png";
import { IoIosSearch } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { db } from "./config/firebase.js";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Card from "./components/Card.jsx";
import AddAndUpddateContact from "./components/AddAndUpddateContact.jsx";
import useDisclouse from "./hooks/useDisclouse.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoContacts from "./components/NoContacts.jsx";


const App = () => {
  const [contacts, setcontacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setcontacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredContacts = contactList.filter(contact => 
     contact.Name.toLowerCase().includes(value.toLowerCase())
      );
      
      setcontacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <Navbar />
      <div className=" flex relative items-center m-4 gap-1">
        <input
        onChange={filterContacts}
          type="text"
          className=" border bg-transparent flex-grow rounded-full h-10 pl-11 text-l text-white focus:*:selection:none"
          placeholder="Search Contact"
        />
        <IoIosSearch className="absolute text-gray-50 text-2xl ml-3" />
        <IoIosAddCircleOutline
          onClick={onOpen}
          className="text-gray-400 text-5xl cursor-pointer"
        />
        
      </div>
      <div>
        {contacts.length<=0 ? (<NoContacts/> ): (contacts.map((contact) => (
          <Card contact={contact} key={contact.id} />
        ))
      )
      }
      </div>
      <AddAndUpddateContact
        contact={contact}
        isOpen={isOpen}
        onClose={onClose}
        className="absolute"
      />
      <ToastContainer position="bottom-center" autoClose={1000} />
    </>
  );
};

export default App;
