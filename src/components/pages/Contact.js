// import React from "react";


// export default function Contact(){

//  return (
//   <div>
//  <img src={contactrvk} height={300} width={1500} />
      
import React, { useState } from 'react';
import styled from 'styled-components';
import contactrvk from "../../images/contactrvk.jpg";
import '../../App.css';


const Textarea = styled.textarea`
width:35%;
border:2px solid #ccc;
border-radius:10px;
padding:2px 5px;
margin-top:10px;
margin-left:260px;
font-size:18px;
`;
const Input = styled.input`
width:35%;
height:35px;
border:2px solid #ccc;
border-radius:10px;
padding:2px 5px;
margin-top:10px;
margin-left:260px;
font-size:18px;
outline:blue;
`;
const Input1 = styled.input`
width:35%;
height:35px;
border:2px solid #ccc;
border-radius:10px;
padding:2px 5px;
margin-top:60px;
margin-left:260px;
font-size:18px;
outline:blue;
`;
const Image=styled.img`
width:100%;
height:auto;

`;
const Button = styled.button`
border-radius:5px;
padding:7px 15px;
margin-top:14px;
margin-left:260px;
background-color:red;
font-color:white;
font-size:20px;
cursor:pointer;
border:none;
`;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Submit form data to server
  }

  return (
    <div>
  <Image src={contactrvk} />
  <form onSubmit={handleSubmit}>
     <div className='git'>
        Get In Touch</div><br/>
        <Input1 type="text" id="name" placeholder="Enter your name" required/><br/>
            <Input type="email" id="email" placeholder="Enter email" required/><br/>
            <Input type="text" id="name" placeholder="Enter mobile no." required/><br/>

       <Textarea placeholder="Type message here..." id="message" rows="6" required></Textarea><br/>
       <Button type="submit">Submit</Button>


 

 
       </form>
        </div>
        
        
        
  );
}

export default Contact;
