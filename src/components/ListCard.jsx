
import React from 'react'
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
 import { useNavigate } from 'react-router-dom';///lik016
 
 
const ListCard = ({categoriess}) => {
   const nav =useNavigate(); ///lik016

  return (
    <Card className="w-96">
    <CardBody>
   
      <div className="divide-y divide-gray-200">
        {categoriess.map(({ strCategory, strCategoryThumb, strCategoryDescription }, index) => (
           <div onClick={()=> nav(`/item/${strCategory}`)} //lik 016
         
            key={index}
            className="flex items-center justify-between pb-3 pt-3 last:pb-0"
          >
            <div className="flex items-center gap-x-3">
              <Avatar size="sm" src={strCategoryThumb} alt={strCategoryThumb} />
              <div>
                <Typography color="blue-gray" variant="h6">
                  {strCategory}
                </Typography>
                <Typography variant="small" color="gray">
                  {strCategoryDescription.substring(0,100)+'.....'}
                </Typography>
              </div>
            </div>
          
          </div>
        ))}
      </div>
    </CardBody>
  </Card>
  )
}

export default ListCard
