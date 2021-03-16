import React from 'react'

export const Alert = ({alert}) => {
    return (
        alert !== null && (<div className={`alert alert-${alert.colorType}`}>
            <i className="fas fa-info-circle"> {alert.message} </i>
        </div> )
    )
}
