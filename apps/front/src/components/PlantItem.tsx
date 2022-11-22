import CareScale from "./CareScale";
import '../styles/PlantItem.css';
import { SyntheticEvent } from "react";

type plant = {
    
    name: string,
    cover: string,
    id: string,
    light: number,
    water: number,
    price: number

};

const PlantItem = (props: plant) => {
    return (
        <li className="lmj-plant-item" >
           <span className='lmj-plant-item-price'>{props.price}€</span>
			<img className='lmj-plant-item-cover' src={props.cover} alt={`${props.name} cover`} />
			{props.name}
            <div>
                <CareScale careType='water' arg={props.water} />
                <CareScale careType='light' arg={props.light} />
            </div>
        </li>
    );

}


function handleClick(plantName : string) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

export default PlantItem