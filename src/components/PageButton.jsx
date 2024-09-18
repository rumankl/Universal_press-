/*import { Button } from "@material-tailwind/react"

const PageButton = ({ data, page, setPage ,pages,setPages}) => {
  
  return (
    <div>

     {data && <div className="pages flex justify-center my-4 items-center">
     <Button Button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</Button>
   
   
        
        <h1 className="mx-7 text-lg font-bold">{data && data.page}</h1>
       

       <Button onClick={() => setPage(page + 1)}>Next</Button>


     </div>}
    </div>
   )
}
 export default PageButton

*/


/*
import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";

 
export function PageButton({data,page,setPage}) {
const lastNo = Array.from({lenght:4}),(_,index)=>page+index
  const next = () => {
    if (page === 20) 
      return;
    setPage(page + 1);
  };
 
  const prev = () => {
    if (page === 1) return;
 
    setPage(page - 1);
  };
 
  return (
    <div className="flex items-center gap-8">
      <IconButton 
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={page === 1}
      >
        <h1>Bbb</h1>
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{data && data.page}</strong> of{" "}
       
        <strong className="text-gray-900 m-6">{page.length-1} </strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={page === 20}
      >
        <h1>Aaa</h1>
      </IconButton>
    </div>

  );
}*/

// {strCategoryDescription.slice(0,100)+'.....'}


import React from "react";
import { Button } from "@material-tailwind/react";


export function PageButton({data,page,setPage}) {

const FirstIndex = Array.from ({length:6},(_,index)=>page-1-index).filter((value)=>value>0).reverse();

const LastIndex = Array.from ({length:7},(_,index)=>page+index);

const merge =[...FirstIndex,...LastIndex];
 
 
  const next = () => {
    // if (page === 5) return;
 
    setPage(page + 1);
  };
 
  const prev = () => {
    // if (page === 1) return;
 
    setPage(page - 1);
  };



  return (
    <div className="flex items-center justify-center gap-4">
      {page>1 ? ( <Button
        variant="text"
        className="flex items-center gap-2 page-btn"
        onClick={prev}
        disabled={page === 1}
      > Previous
      </Button>) : ("")}
     


     {merge.map((value)=>{
      return(

        <div onClick={()=>setPage(value)} className= {` ${value === page ? 'page-btn active' : 'page-btn'}`} >
         <p className="m-4">{value}</p> 

        </div>
      )
     })}
     


      <Button
        variant="text"
        className="page-btn flex items-center gap-2"
        onClick={next}
        disabled={page === 500}
      >
        Next
      
      </Button>

     <div>




     </div>
     
    </div>
  );
}