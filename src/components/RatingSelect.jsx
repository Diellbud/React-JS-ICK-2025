import { useState } from "react"

function RatingSelect({select}) {
  const [selected, setSelected]= useState(10)  
  const handleOnChange = (e)=>{
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }
    return(
        <ul className="rating">
            <li>
        <input type="radio" id="num1" onChange={handleOnChange} value={1} checked={selected===1}/>
        <label htmlFor="num1">1</label>
        </li>
        <li>
        <input type="radio" id="num2" onChange={handleOnChange} value={2} checked={selected===2}/>
        <label htmlFor="num2">2</label>
        </li>
        <li>
        <input type="radio" id="num3" onChange={handleOnChange} value={3} checked={selected===3}/>
        <label htmlFor="num3">3</label>
        </li>
        <li>
        <input type="radio" id="num4" onChange={handleOnChange} value={4} checked={selected===4}/>
        <label htmlFor="num4">4</label>
        </li>
        <li>
        <input type="radio" id="num5" onChange={handleOnChange} value={5} checked={selected===5}/>
        <label htmlFor="num5">5</label>
        </li>
        <li>
        <input type="radio" id="num6" onChange={handleOnChange} value={6} checked={selected===6}/>
        <label htmlFor="num6">6</label>
        </li>
        <li>
        <input type="radio" id="num7" onChange={handleOnChange} value={7} checked={selected===7}/>
        <label htmlFor="num7">7</label>
        </li>
        <li>
        <input type="radio" id="num8" onChange={handleOnChange} value={8} checked={selected===8}/>
        <label htmlFor="num8">8</label>
        </li>
        <li>
        <input type="radio" id="num9" onChange={handleOnChange} value={9} checked={selected===9}/>
        <label htmlFor="num9">9</label>
        </li>
        <li>
        <input type="radio" id="num10" onChange={handleOnChange} value={10} checked={selected===10}/>
        <label htmlFor="num10">10</label>
        </li>
        </ul>
    )
}
export default RatingSelect