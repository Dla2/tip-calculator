const PercentageBtn = ({value, getTipPercent, tipPercent}) => {

    const handleClick = () => {
        getTipPercent(value)
    }

    return ( 
        <>
            <a onClick={handleClick} className={tipPercent == value ? 'active' : ''}>{value}%</a>
        </>
     );
}
 
export default PercentageBtn;