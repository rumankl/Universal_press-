//016
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  getItems } from '../app_data/app_Url';
import { useParams } from 'react-router-dom';
import BackCard from '../components/BackCard';

const ItemPage = () => {
  const {category} =useParams();
  const [data, setData] = useState();
const getData =async () =>{
  try{
    const response =await axios.get(getItems,{
      params:{
        c: category
      }
    });
    setData(response.data);
  }catch(err){}
}
useEffect(()=>{
  getData();
},[]);
console.log(data)
  return (
    <div className='grid grid-cols-4 gap-2' >
       {data && data.meals.map((meal) => {
        return <BackCard key={meal.idMeal} mealeeee={meal} />;
      })}

    </div>
  )
}

export default ItemPage
