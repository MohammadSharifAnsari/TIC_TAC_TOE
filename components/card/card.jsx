import Icon from "../icon/icons.jsx";
import './card.css';



function Card({gameEnd,player,onplay,index}){

let icon=<Icon/>

if(player=='X'){
    icon=<Icon name='cross'/>
}
else if(player=='O'){
    
    icon=<Icon name='circle'/>

}


return (
<div className="card" onClick={()=>{!gameEnd&&player!='O'&&player!='X'&&onplay(index)}}>
{icon}
</div>
)


}

export default Card;