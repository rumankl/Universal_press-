import React, { useEffect, useState } from 'react'
import ListCard from '../components/ListCard'
import { categoryUrl } from '../app_data/app_Url';
import axios from 'axios';
import Example from './Example';

const HomePage = () => {
  const [data,setData] = useState();
const getData =async () =>{
  try{
    const response =await axios.get(categoryUrl);
    setData(response.data);
  }catch(err){}
}
useEffect(()=>{
  getData();
},[]);
///1098037016 && 1259275160
  return (
    <div>
      <Example />
     {data && <ListCard categoriess={data.categories} />} 
  
    </div>
  )
}

export default HomePage
