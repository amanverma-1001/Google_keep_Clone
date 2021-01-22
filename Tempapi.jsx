import React,{useState,useEffect} from "react";
import axios from "axios";
import Carddata from "./Carddata";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';


const Tempapi=()=>{
    let [cityname,setcity]=useState("");
    let [result,setresult]=useState(null);
    let [arr,setarr]=useState([]);
    useEffect(()=>{
    async function getdata()
    {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=eb9765cbeeb9bcbc981ceb6fb2ea1267`;
        const r=await axios.get(url);
          setresult(r);
          console.log(r);
    }
    getdata();
},[cityname]);
const Deleteitem=(i)=>{
    setarr((prev)=>{
       return prev.filter((va,l)=>{
            return l!==i;
        });
    });
};
    return(
        <>
        
        <div className="my-5 p-3">
        <input type="text" value={cityname} onChange={(event)=>setcity(event.target.value)} placeholder="Enter city to search" />
        <Tooltip title="Add city" aria-label="add city">
  <Fab color="primary">
    <AddIcon onClick={()=>setarr([...arr,[result.data.name,result.data.sys.country,result.data.main.temp_max,
    result.data.main.temp,result.data.main.temp_min,result.data.wind.speed,result.data.weather[0].description]])} />
  </Fab>
</Tooltip>
<br/><br/>

       { !result ? ( <Carddata v={["city not found","","","","","","","",""]} />
        ):(
           <Carddata v={[result.data.name,result.data.sys.country,result.data.main.temp_max,
            result.data.main.temp,result.data.main.temp_min,result.data.wind.speed,result.data.weather[0].description]} />
            
        ) }
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h3>Add your favourite cities</h3>
        <li>
        {arr.map((value,index)=>{
            console.log(`value-${value} and index is ${index}`);
        return <Carddata key={index} val={index} v={value} onSelect={Deleteitem} />;
        }) }
        </li>
        
        </>
    );
}
export default Tempapi;