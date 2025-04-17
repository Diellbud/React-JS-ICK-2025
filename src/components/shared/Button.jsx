function Button({isDisabled, type, version, children}) {
    return(
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`} id="btn">{children}</button>
    )
}
export default Button