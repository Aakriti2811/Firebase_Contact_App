import React from 'react'
import Addcard from './Addcard'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { collection, doc, updateDoc } from 'firebase/firestore'
import {db} from '../config/firebase.js';
import { addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
    Name:Yup.string().required("* Name is required"),
    Email:Yup.string().email("* Invalid Email").required("* Email is required"),
})

const AddAndUpddateContact = ({isOpen,onClose,isUpdate,contact}) =>{
    const addContact = async (contact) =>{
        try { 
            const contactRef = collection(db,"contacts")
            await addDoc(contactRef, contact);
            toast.success("Contact Added Successfully");
        } catch (error) {
            console.log(error);
        }
    } 
    const updateContact = async (contact,id) =>{
        try { 
            const contactRef = doc(db,"contacts",id)
            await updateDoc(contactRef, contact);
            toast.success("Contact updated Successfully");
        } catch (error) {
            console.log(error);
        }
    } 
  return ( 
    <Addcard isOpen={isOpen} onClose={onClose}>
    <Formik
    validationSchema={contactSchemaValidation}
    initialValues={isUpdate ?{
        Name:contact.Name,
        Email:contact.Email,
    }:
    {
       Name:"",
        Email:"",
    }}
    onSubmit={(values)=>{
        isUpdate?updateContact(values,contact.id):
        addContact(values); 
        onClose();
    }}>

     <Form className='m-4 mt-0'>
        <div className='flex flex-col gap-1 '>
        <label htmlFor="name" className='font-bold font-sans'>Name</label>
        <Field name='Name' className='rounded-lg  pl-2 font-mono'/>  
        <div className='text-xs text-red-500 font-sans font-semibold'>
            <ErrorMessage name='Name'/>
        </div>

        </div>
        <div className='flex flex-col gap-1 mt-2 '>
        <label htmlFor="Email" className='font-bold font-sans'>Email</label>
        <Field  type="email" name='Email' className='rounded-lg pl-2 font-mono'/>  
        <div className='text-xs text-red-500 font-sans font-semibold'>
            <ErrorMessage name='Email'/>
        </div>
        </div>
        <button type='submit' className='bg-blue-400 p-2 w-full text-white mt-4  font-sans  border rounded-full '>{isUpdate ? "Update" : "Add"} Contact</button>
     </Form>
    </Formik>
    </Addcard>
  )
}

export default AddAndUpddateContact