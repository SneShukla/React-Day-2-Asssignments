import { useState } from "react";

function State()
{
    const [pname, setPname] = useState("");
    const[price, setPrice] = useState("");
    const[qty, setQty] = useState("");
    const[result, setResult] = useState("");
    const[total, setTotal] = useState("");
    

    function buttonClick()
    {
        let t = parseInt(price)*parseInt(qty);
        
        if(qty >= 30)
        {
            t = t*0.85;
        }
        else if(qty >20)
        {
            t = t*0.10;
        }
        else if(qty > 10)
        {
            t = t*.05;
        }
        setResult(t);
      
    
    }

    

    return(
        <>
        <fieldset>
            <legend>Products</legend>
        <h3>working with state in JS</h3>
        <hr/>

        Name : <input type ="text" value={pname} onChange = {(e) => setPname(e.target.value)} /> <br/>
        Price : <input type ="number" value={price} onChange = {(e) => setPrice(e.target.value)} /> <br/>
        Quantity : <input type ="number" value={qty} onChange = {(e) => setQty(e.target.value)} /> <br/>
        <input type="button" onClick={buttonClick} value="Get Total"/>
        

        <p>Total: {result}</p>
        </fieldset>
        </>
    );
}
export default State;

