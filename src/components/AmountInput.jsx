import { useState } from "react";
import icon from '../assets/images/icon-dollar.svg'
const AmountInput = ({placeholder, getBill}) => {

    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        setValue(Number(e.target.value));

        getBill(Number(e.target.value));
    }

    return ( 
        <div className="icon-input-wrapper">
            <input type="text" placeholder={placeholder} onChange={handleChange} required/>
            <img src={icon} alt="" />
        </div>
     );
}
 
export default AmountInput;