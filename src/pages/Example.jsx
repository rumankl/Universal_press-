// import React, { useRef } from 'react'

// const Example = () => {
//   // const [count, setCount] = useState(0);
//   const some =useRef()
//   const handleClick = () => {
//     // some.current++;
//     some.current.focus();

//   }

//   return (
//     <div>
//       <input ref={some} label="hello"  placeholder='hello'/>
//       <h1> hee</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default Example



/*
import { useRef } from "react";
import { useState } from "react";

const Example = () => {

  const [count, setCount] = useState(0);
  const some = useRef();

  // console.log(some.current);


  const handleClick = () => {
    some.current.scrollIntoView({
      behavior: 'smooth'
    })
    // some.current.style.color='red';
    // console.log(some.current);
    // some.current++;
    // console.log(some);
    //setCount(count + 1)
  }

  console.log('render');
  return (
    <div>

      <input label="hello jee" id="h" placeholder="hello jee" />

      <h1 >Increase your value {count}</h1>
      <button onClick={handleClick}>Click to increase your value</button>
      
      <br /><br /><br />

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae labore quod quis fugit recusandae quos aliquam ipsam eligendi? Tenetur accusamus asperiores recusandae, quo consectetur ducimus quidem molestias aut ut accusantium labore nam vel minima dolorem repudiandae, quasi iusto, aliquam rem distinctio quaerat commodi excepturi ab? Similique, laudantium minus eum dolorum consequatur nam vero laboriosam officiis recusandae commodi sed quis deleniti autem excepturi temporibus eligendi. Natus reprehenderit magnam minus accusamus porro alias dolorum, eius voluptatem, cumque corrupti veniam, dicta atque illum facilis rerum cum soluta. Voluptatibus voluptates odit illum voluptate ullam sint, nobis, sit iusto quisquam repellat iste, quasi alias error ipsum fuga. Non quae optio, beatae dicta asperiores facere voluptatum amet sed laudantium voluptates iusto ad alias modi nisi autem, officiis ut eaque dolorum? Optio vitae sunt quasi excepturi consequuntur architecto illum voluptatum. Odit sunt nostrum sapiente neque, consequatur error at nisi eaque ad pariatur accusamus, doloribus odio dolor obcaecati, tempora quis quae atque corrupti fugiat facere iste! Praesentium dicta accusantium pariatur quod doloremque, harum unde veniam beatae deleniti ipsa voluptatem laboriosam delectus sit dolor aspernatur, voluptatum fuga aperiam nisi officiis. Nisi soluta necessitatibus ut quis quibusdam sequi aut similique itaque provident vero, nostrum esse deserunt mollitia, ab accusantium. Nulla voluptates quasi sunt omnis. Culpa fuga vel consequuntur expedita quidem sit repudiandae. Doloremque suscipit dolore aperiam vel culpa similique officia porro quisquam adipisci ad qui voluptate repellendus in repudiandae aut eligendi quidem earum perspiciatis quam, laboriosam animi. Quas velit illum blanditiis quisquam cumque dicta animi quaerat distinctio molestias molestiae repellat accusantium fuga, assumenda officiis? Nulla eum mollitia aut quas eius fugiat, nihil rem. Impedit modi distinctio, delectus repellat nam similique error explicabo totam eos perspiciatis. Provident debitis, incidunt quas perspiciatis est ipsum molestias praesentium quos nesciunt corporis consectetur. Labore sit quis accusantium totam odit perspiciatis, debitis alias minima, soluta, ratione nobis nihil! Consequatur id quam enim culpa fugit, commodi reiciendis eos voluptatum ipsa aliquid quibusdam, officiis quae consequuntur ullam? Perferendis in, nulla perspiciatis, quos dolorem vel quia similique modi impedit ex iure? Quam aliquam explicabo sunt alias odio laborum placeat animi quaerat cum tenetur qui perferendis libero aut consequatur iure incidunt, natus iste repudiandae laudantium ratione tempore neque nulla voluptate. Expedita, quis minima architecto repudiandae animi enim officiis impedit temporibus consequatur omnis voluptate eligendi perspiciatis inventore exercitationem deleniti dicta quos facere placeat modi. Maiores nisi reprehenderit ipsum recusandae eaque odio sit qui soluta cumque ut iure consequatur sint quisquam dicta amet, libero perferendis officiis saepe velit molestiae corrupti suscipit eos vel! Doloribus eaque quos quas quod quae incidunt et nemo! Ut esse atque saepe odit incidunt asperiores expedita hic? Provident dolorum tempora enim excepturi beatae temporibus aliquid exercitationem quas quis, dolorem maiores doloremque officiis repellat ut. Alias ullam magni vero necessitatibus, officia nihil. Provident deleniti error consectetur incidunt pariatur numquam sit corrupti minus perspiciatis, molestias voluptatem culpa dignissimos ipsa cupiditate at illo earum voluptatum inventore, veritatis officiis, illum totam vitae! Culpa similique corporis quam! Dolores quisquam cum voluptatum possimus harum numquam sint unde, obcaecati officia soluta porro atque quo rem!</p>

      <h1 ref={some} className="text-2xl">Footer</h1>

    </div>
  )
}
export default Example
*/


import { useState } from "react";
import { useEffect } from "react"

const Example = () => {


  const [count, setCount] = useState(0);
  // const [message, setMessage] = useState('');
  const getData = () => {
    
    // setMessage('hello jee');
    console.log('hello jee');
  }

  useEffect(() => {
    getData();
  }, [count]);

  return (
    <div>

      <button onClick={() => setCount(count+ 1)}>Click Me</button>

      <h1>{count}</h1>
      {/* <p>{message}</p> */}


    </div>
  )
}
export default Example



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Example = () => {
//   const [items, setItems] = useState([]);
//   const [dependency, setDependency] = useState(0); // Example dependency

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         console.log(response.data)
//         //setItems(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [dependency]); // Effect runs when 'dependency' changes

//   return (
//     <div>
//       {JSON.stringify(items)}
//       <button onClick={() => setDependency(dependency + 1)}>Update Dependency</button>
//     </div>
//   );
// };

// export default Example;



