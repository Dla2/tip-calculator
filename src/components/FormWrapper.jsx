import { useState } from "react";
import PercentageBtn from "./PercentageBtn";
import AmountInput from "./AmountInput";
import PercentageInput from "./PercentageInput";
import PeopleInput from "./PeopleInput";

const FormWrapper = () => {

    const percentages = [5, 10, 15, 25, 50];
    const [personAmount, setPersonAmount] = useState('0.00');
    const [totalAmount, setTotalAmount] = useState('0.00');
    const [isCalculated, setIsCalculated] = useState(false);
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0)
    const [customPercent, setCustomPercent] = useState(0);
    const [amountOfPeople, setAmountOfPeople] = useState(0);

    const getBill = (val) => {
        setBill(val)
    }

    const getCustomPercent = (val) => {
        setCustomPercent(val)
        setTipPercent(0)
    }

    const getAmountOfPeople = (val) => {
        setAmountOfPeople(val)
    }

    const getTipPercent = (val) => {
        setTipPercent(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (bill == 0 || amountOfPeople == 0) {
            alert('Please enter some data')
        } else {
            if(customPercent != 0) {
                let temptipAmount = bill * (customPercent / 100);
                let tempTotal = bill + temptipAmount;
    
                setTotalAmount(tempTotal / amountOfPeople);
                setPersonAmount(temptipAmount / amountOfPeople);
                setIsCalculated(!isCalculated)
            } else {
                let tempTipAmount = bill * (tipPercent / 100);
                let tempTotal = bill + tempTipAmount;
    
                setTotalAmount((tempTotal / amountOfPeople).toFixed(2));
                setPersonAmount((tempTipAmount / amountOfPeople).toFixed(2));
                setIsCalculated(!isCalculated)
            }
        }
    }

    const handleReset = () => {
        setPersonAmount('0.00')
        setTotalAmount('0.00')
        setIsCalculated(false)
        setBill(0)
        setTipPercent(0)
        setCustomPercent(0)
        setAmountOfPeople(0)
    }


    return ( 
        <form className="form" onSubmit={handleSubmit}>
            <div className="inputs">
                <p>Bill</p>
                <AmountInput placeholder='Bill' getBill={getBill}/>
                <p>Select Tip %</p>
                <div className="btns-wrapper">
                    {percentages.map((item, index) => (
                        <PercentageBtn value={item} key={index} getTipPercent={getTipPercent} tipPercent={tipPercent}/>
                    ))}
                    <PercentageInput placeholder='Custom' getCustomPercent={getCustomPercent}/>
                </div>
                <p>Number of People</p>
                <PeopleInput placeholder='0' getAmountOfPeople={getAmountOfPeople}/>
            </div>
            <div className="results">
                <div className="tip-person">
                    <div className="person-text">
                        <p>Tip Amout</p>
                        <p className="sub-text">/ person</p>
                    </div>
                    <div className="person-amount">
                        <h1>${personAmount}</h1>
                    </div>
                </div>
                <div className="total-person">
                    <div className="total-text">
                        <p>Total</p>
                        <p className="sub-text">/ person</p>
                    </div>
                    <div className="total-amount">
                        <h1>${totalAmount}</h1>
                    </div>
                </div>
                {!isCalculated && <button className="submit-reset-btn" type="submit">Submit</button>}
                {isCalculated && <button className="submit-reset-btn" onClick={handleReset}>Reset</button>}
            </div>
        </form>
     );
}
 
export default FormWrapper;