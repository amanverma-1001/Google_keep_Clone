import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const Carddata=(props)=>{
return(
    <>
    <>
<div className="card m-4 float-left" >
  <div className="card-body">
    <h5 className="card-title">{props.v[0]}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.v[1]}</h6>
    <div className="card-text">
    <table class="table table-borderless">
    <thead>
      <tr>
        <th>Max temperature</th>
        <th>Temperature</th>
        <th>Min Temperature</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.v[2]}</td>
        <td>{props.v[3]}</td>
        <td>{props.v[4]}</td>
      </tr>
      </tbody>
      </table>
      <table class="table table-borderless">
    <thead>
      <tr>
        <th>Wind speed</th>
        <th>Clouds</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.v[5]}</td>
        <td>{props.v[6]}</td>
      </tr>
      </tbody>
      </table>
    </div>
    <DeleteIcon onClick={()=>{
            props.onSelect(props.val);
    }} />
  </div>
</div>
</>
</>
);

}

export default Carddata;