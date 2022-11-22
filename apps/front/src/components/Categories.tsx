import plantList, { Plant } from '../datas/plantList'
import '../styles/Categories.css'


function Categories({categories, inputValue, setInputValue} : any) {

    return (

            <div className='lmj-categories'>
                Choix categories: <br></br>
                <select value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='lmj-categories-select'>
                    <option value="">-- Default --</option>
                    {categories.map((category : string) => <option key={category} value={category}>{category}</option>)}
                </select>
                <button onClick={() => setInputValue("")}>Réinitialiser</button>
            </div>
    )
}

export default Categories