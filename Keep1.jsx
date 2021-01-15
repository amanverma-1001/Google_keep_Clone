import react,{useState} from "react";
import "./Googlekeep.css";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CardList from "./Card_list";

const Keep1=()=>{
    let [t,s]=useState(false);
    let [tv,cv]=useState(" ");
    let [bv,dv]=useState(" ");
    let [nv,ev]=useState([]);
    const titledisplay=()=>{
        s(true);
    }
    const titlevalue=(event)=>{
        cv(event.target.value);
    }
    const bodyvalue=(event)=>{
        dv(event.target.value);
    }
    const mynotes=()=>{
       ev((prev)=>{
           return [...prev,[tv,bv]];
       });
       console.log(nv);
    };
    const deleteitem=(k)=>{
        ev((prev)=>{
            return prev.filter((m,l)=>{
               return l!==k;
            });
        });
    };

  return(
      <>
      <div className="main-body">
      <input type="text" className="title" placeholder="Title" style={{"display":t?"block":"none"}} onChange={titlevalue} />
      <textarea type="text" className="note-body" placeholder="Write a note.." onClick={titledisplay} onChange={bodyvalue} />
      <Fab color="primary" aria-label="add" style={{"float":"right"}}>
        <AddIcon onClick={mynotes} />
      </Fab>
      </div>
      <br /> <br /><br /><br /> <br /><br /> <br /><br />

      {nv.map((item,id)=>{
          return <CardList key={id} val={id} text={item} onSelect={deleteitem} />;
           }) }
      </>
  );   
}

export default Keep1;

