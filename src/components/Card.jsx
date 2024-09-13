import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { db } from '../config/firebase';
import AddAndUpddateContact from './AddAndUpddateContact';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';

const Card = ({contact}) => {
  const {isOpen,onClose,onOpen}= useDisclouse();
  const deleteContact = async(id)=>{
    try {
      await deleteDoc(doc(db, "contacts",id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
     console.log(error); 
    }
  }
  return (<>
    <div key={contact.id}  className='flex m-4 gap-2 items-center justify-between rounded-xl p-2 border mt-4'>
       
        <div className='flex gap-4 justify-center items-center'>
        <FaCircleUser className='text-slate-300 text-4xl'/>
        <div className=''>
        <h1 className='text-slate-50 text-l'>{contact.Name} </h1>
        <p className='text-slate-400 text-sm'>{contact.Email}</p>
        </div>
        </div>
      <div className='flex gap-2'>  
      <MdEditNote onClick={onOpen} className='text-slate-300 text-3xl cursor-pointer'/>
      <MdDeleteSweep onClick={()=>deleteContact(contact.id)} className='text-slate-300 text-3xl cursor-pointer'/></div>
    </div>
    <AddAndUpddateContact isUpdate isOpen={isOpen} contact={contact} onClose={onClose} />
    </>
  )
}

export default Card