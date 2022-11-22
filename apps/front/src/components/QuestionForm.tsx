// import { SyntheticEvent } from "react";
import { useState } from 'react'


function QuestionForm() {
    
    const [inputValue, setInputValue] = useState("Posez votre question ici")
    
    function checkValue(value : string) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
    
    
    const isInputError = inputValue.includes('f') 
    
    return (
        <div>
            <textarea
                value={inputValue}
                
                onChange={(e) => setInputValue(e.target.value)}
                />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
            {/* {isInputError && (
            <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )} */}
        </div>
    )
}

// function handleSubmit(e: SyntheticEvent) {
//     e.preventDefault()
//     let test:EventTarget = e.target;
//     let res: any = test.dispatchEvent;
//     alert(res)
// }

// function handleSubmit(e: any) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }



export default QuestionForm