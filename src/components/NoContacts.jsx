import React from 'react'
import contact from "../assets/Hands Contact.png";

const NoContacts = () => {
  return (
     <div className="absolute top-[50%] left-[50%] flex-col">
          <img src={contact} alt="contact  logo" className=" w-[80px]" />
          <h1 className="text-gray-400 mt-3">No Contact</h1>
        </div> 
  )
}

export default NoContacts