import { PropsWithRef } from "react"
import sun from "../assets/sun.svg"
import water from "../assets/water.svg"

const quantityLabel : string [] = [

    'peu',
    'moderement',
    'beaucoup'
]

function Plantalert(scaleValue : number, careType : string) {

    alert(`Cette plante requiert ${quantityLabel[scaleValue - 1]} ${careType === 'light' ? 'de lumière' : "d'arrosage"}`)
}

function CareScale(props: PropsWithRef<any>) {
    
    const scaleValue = props.arg
    const isType = props.careType
    const range = [1, 2, 3]
    const symbole = isType === 'light' ? sun : water

    return (
		<div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ?
                <span key={rangeElem.toString()}>
                    <img src ={symbole} onClick={() => Plantalert(scaleValue, isType)}/>
                </span> : null
            )}
        </div>
    )
}


export default CareScale