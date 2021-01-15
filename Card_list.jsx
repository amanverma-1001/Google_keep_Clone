import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import "./Googlekeep.css";

const mycard={
 width:"25%",
 marginLeft:"5%",
 display:"inline-flex",
 marginTop:"3%"
}
const Card_list=(props)=>{
return (
    <div style={mycard}>
  <Card>
 <CardContent>
  <Typography color="textSecondary" gutterBottom>
       {props.text[0]}
   </Typography>
   <Typography variant="h5" component="h2">
     {props.text[1]}
    </Typography>
   </CardContent>
   <CardActions>
      <DeleteIcon onClick={()=>{
          props.onSelect(props.val);
      }} />
</CardActions>
</Card>
</div>
);
}

export default Card_list;