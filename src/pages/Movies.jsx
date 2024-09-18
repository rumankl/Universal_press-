import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import Lay from "./Lay";

const Movies = () => {

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
     
    } catch (err) {

    }
  }

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className='flex flex-col-4 gap-4'>

{data && data.map((mov,i)=>(
 <div >
    <Lay key={i} movies={mov} />
  </div>
  
))}

    </div>
  )
}
export default Movies