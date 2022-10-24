import {Component} from "react";
import Card from "../card/card.component";
 import './card-list.styles.css'

class CardList extends Component{

render(){

    const {monsters} = this.props
    const {name,email,id} = monsters


return(

<div className="CardList">

    {monsters.map((monsters) => { 
        const {name,email,id} = monsters
    return (
        <Card monsters={monsters}/>

    )})}

</div>










)




    
}




}


export default CardList                 