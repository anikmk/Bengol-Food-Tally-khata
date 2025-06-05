import { useState } from "react";

const Calculator = () => {
    const [money,setMoney] = useState(0);
    const handleSaveMoney = (e)=>{
        const price = e.target.value;
       setMoney(price)
       price.reset()
    }
     const handleClick = () => {
        console.log(money);

        }
    return <>
    <div>
        <div><h1>calculators</h1></div>
        <div>{money}</div>
        <div className="flex items-center gap-3">
            <div><label htmlFor="">input number</label><input onChange={handleSaveMoney} name="money" type="number" />
            </div>
            <div><button onClick={handleClick}>save</button></div>
        </div>
    </div>
    </>
}
export default Calculator;