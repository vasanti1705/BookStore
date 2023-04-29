import React, { useState } from 'react'
import { FormLabel,TextField,Box, Button,FormControlLabel,Checkbox } from '@mui/material'
import {useNavigate} from 'react-router-dom';
import  axios  from 'axios';
export default function AddBook() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name:'',
    description:'',
    author:'',
     price:'',
   
     image:''
  });
  const [checked, setchecked] = useState(false)
  const handleChange = (e)=>{
    setInputs((prevState)=>({
     ...prevState,
     [e.target.name]:e.target.value
   }))
    //console.log(e.target.name,"Value",e.target.value);
  };

const sendRequest = async()=>{
  axios.post("http://localhost:5000/books",
  {
    name: String(inputs.name),
    author: String(inputs.author),
    description: String(inputs.description),
    price: Number(inputs.price),
    image: String(inputs.image),
    available:Boolean(checked)

  }).then(res=>res.data);
}


  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>history('./books'))
  }
  return (
   <form onSubmit={handleSubmit}>
    <Box display="flex"
     flexDirection="column" 
     justifyContent={'center'} 
     maxWidth={700}
     alignContent={'center'}
     alignSelf={'center'}
     marginLeft={'auto'}
     marginRight={'auto'}
     marginTop={10}
     >
      <FormLabel>Name</FormLabel>
      <TextField value={inputs.name} 
      onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'></TextField>
      <FormLabel>Author</FormLabel>
      <TextField value={inputs.author} 
      onChange={handleChange}
       margin='normal' fullWidth variant='outlined' name='author'></TextField>
      <FormLabel>Description</FormLabel>
      <TextField value={inputs.description} 
      onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'></TextField>
      <FormLabel>Price</FormLabel>
      <TextField value={inputs.price} 
      onChange={handleChange} type='number' margin='normal' fullWidth variant='outlined' name='price'></TextField>
      <FormLabel>Image</FormLabel>
      <TextField 
      value={inputs.image} 
      onChange={handleChange}
      margin='normal' 
      fullWidth 
      variant='outlined' 
      name='image'></TextField>
        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setchecked(!checked)}  />} label="Available" />
      
      
      <Button variant='contained' type='submit'>Add Book</Button>
      </Box>
    
  </form>
  )
}
