
// import React from "react";
// import { Button } from "@material-tailwind/react";


// export function PageButtonscopy({data,page,setPage}) {

// // const FirstIndex = Array.from ({length:2},(_,index)=>page-1-index).filter((value)=>value>0).reverse();

// const merge = Array.from ({length:10},(_,index)=>page+index);

// //const merge =[...FirstIndex,...LastIndex];
 
 
//   const next = () => {
//     // if (page === 5) return;
 
//       setPage(page + 1) ;
    
//   };
 
//   const prev = () => {
//     // if (page === 1) return;
 
//     setPage(page - 1);
//   };



//   return (
//     <div className="flex items-center justify-center gap-4">
//         <Button
//         variant="text"
//         className="flex items-center gap-2 page-btn"
//         onClick={prev}
//         disabled={page === 1}
//       > Previous
//       </Button>
     


//      {merge.map((value)=>{
//       return(

//         <div onClick={()=>setPage(value)} className= {` ${value === page ? 'page-btn active' : 'page-btn'}`} >
//          <p  className="m-4">{value}</p> 

//         </div>
//       )
//      })}
     


//       <Button
//         variant="text"
//         className="page-btn flex items-center gap-2"
//         onClick={next}
//         disabled={page === 500}
//       >
//         Next
      
//       </Button>

//      <div>




//      </div>
     
//     </div>
//   );
// }

import React from "react";
import { Button } from "@material-tailwind/react";

export function PageButtonscopy({ data, page, setPage }) {
  // Determine the start and end of the range
  const startPage = Math.max(1, page - 15);

  const merge = Array.from({ length: 15 }, (_, index) => startPage  + index);

  const next = () => {
    setPage(page + 1);
  };

  const prev = () => {
    setPage(page - 1);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 page-btn"
        onClick={prev}
        disabled={page === 1}
      >
        Previous
      </Button>

      {merge.map((value) => (
        <div
          key={value}
          onClick={() => setPage(value)}
          className={`page-btn ${value === page ? 'active' : ''}`}
        >
          <p className="m-4">{value}</p>
        </div>
      ))}

      <Button
        variant="text"
        className="page-btn flex items-center gap-2"
        onClick={next}
        disabled={page === 500}
      >
        Next
      </Button>
    </div>
  );
}
