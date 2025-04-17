
function Rating(type, id, onChange, value,checked) {
    return (
        <>
        <input type="radio" id={id} onChange={onChange} value={value} checked={checked}/>
        <label htmlFor={id}>1</label>
        </>
    )
}
export default Rating