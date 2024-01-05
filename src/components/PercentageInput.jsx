import { useState } from "react";

const PercentageInput = ({placeholder, getCustomPercent}) => {

    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        setValue(Number(e.target.value));

        getCustomPercent(Number(e.target.value))
    }

    return ( 
        <>
            <input type="text" placeholder={placeholder} onChange={handleChange} />
        </>
     );
}
 
export default PercentageInput;
