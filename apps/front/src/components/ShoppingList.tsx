import plantList, { Plant } from '../datas/plantList'
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css'
import Categories from './Categories';
import { useState } from 'react'


function ShoppingList({cart, updateCart, inputValue, setInputValue}: any) {

    let tab = new  Set<string>();
    let categories : string[] = [];
    
    plantList.forEach((plant : Plant) => {
        tab.add(plant.category);
    });
    
    tab.forEach((category : string) => {
        categories.push( category);
    });

    function addToCart(name : string, price : number) {

        const currentPlantAdded = cart.find((plant : Plant) => plant.name === name)

        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter((plant : Plant) => plant.name !== name)
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 } 
            ])
        }
        else {
            updateCart([
                ...cart,
                { name , price, amount: 1}
            ])
        }
    }

    function filterPlant(plant : Plant) : any {

        if (!inputValue || (inputValue === plant.category))
        {
            return (
                
            <div key={plant.id} >

                <PlantItem
                    name={plant.name}
                    cover={plant.cover}
                    id={plant.id}
                    light={plant.light}
                    water={plant.water}
                    price={plant.price}
                />
                <button className='lmj-sales' onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
            
             </div>   
            )
        }
        else
            return (null)
    }

    return (

        <div className='lmj-shopping-list'>

            <Categories categories={categories} inputValue={inputValue} setInputValue={setInputValue} />
            <ul className='lmj-plant-list'>
                {plantList.map((plant : Plant) => filterPlant(plant))}
            </ul>
        </div>
    )
}

export default ShoppingList