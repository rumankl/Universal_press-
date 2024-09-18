//016
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  
} from "@material-tailwind/react";

const Lay = ({ movies }) => {
  return (
    <div >
    <Card className="w-full max-w-[48rem] flex-row">
    <CardHeader
      shadow={false}
      floated={false}
      className="m-0 w-2/5 shrink-0 rounded-r-none"
    >
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        alt="card-image"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h6" color="gray" className="mb-4 uppercase">
        {movies.name}
      </Typography>
      <Typography variant="h4" color="blue-gray" className="mb-2">
       {movies.username}
      </Typography>
      <Typography color="gray" className="mb-8 font-normal">
     {movies.email}
      </Typography>
      <Typography color="gray" className="mb-8 font-normal">
     {movies.address.street}
      </Typography>
      
    </CardBody>
  </Card>
  </div>
  )
}

export default Lay
