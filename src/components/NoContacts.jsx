import React from 'react'
import contact from "../assets/Hands Contact.png";

const NoContacts = () => {
  return (
     <div className="absolute top-[50%] w-full flex flex-col items-center justify-center">
          <img src={contact} alt="contact  logo" className=" w-[60px]" />
          <h1 className="text-gray-400 mt-3">Contact Not Found!</h1>
        </div> 
  )
}

export default NoContacts