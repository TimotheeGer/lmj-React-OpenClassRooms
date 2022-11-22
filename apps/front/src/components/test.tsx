import React from 'react'
import ReactDOM from 'react-dom'


function Header() {

    return (<h1>{"La maison jungle.".toUpperCase()}</h1>);
}

function Description() {

    const text = "Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍"
    return (<p>{text}</p>)
}

function Cart() {
    
    var tab : any;
    tab = [["monstera", 8],["lierre", 10],["bouquet de fleurs", 15]];

    var adition : number;
    adition = 0;    
    for (var i = 0; i < tab.length; i++)
        adition += tab[i][1];

    return (

        <div>
        <h2>Panier</h2>
            <ul>
                {tab.map((x : any) => <li>{x[0] + " : " + x[1] + "$"}</li>)}
            </ul>

            Total : {adition}€
        </div>
    )
}

function Banner() {
    return (
        <React.Fragment>
            <Header />
            <Description />
            <Cart />
        </React.Fragment>
    
    )
}

export default Banner

// ReactDOM.render(<Banner />, document.getElementById("root"))