//016
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,

} from "@material-tailwind/react";

const BackCard = ({ mealeeee }) => {
  return (
    <Card
    shadow={false}
    className="relative  grid-col-4 grid h-[30rem]  w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
  >
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
      style={{ backgroundImage: `url(${mealeeee.strMealThumb})` }}
    >
      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
    </CardHeader>
    <CardBody className="relative py-14 px-6 md:px-12">
      <Typography
        variant="h2"
        color="white"
        className="mb-6 font-medium leading-[1.5]"
      >
        {mealeeee.strMeal}
      </Typography>

    </CardBody>
  </Card>

  )
}

export default BackCard
