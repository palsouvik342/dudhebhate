
const AlertMessage = (props) => {
    return (
        <>
        {props.showMessage && <div className={`alert alert-${props.messageType} alert-dismissible fade show`} role="alert">
            <strong>{props.showMessage && props.showMessage}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
        </>
    )
}

export default AlertMessage