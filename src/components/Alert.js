import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
    // If props.alert is null then the code written after "&&" won’t be shown otherwise the code inside <div></div> tag will be displayed.
    const capitalize=(word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
    props.alert &&
    <div className="container my-3">
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.title)} </strong> {props.alert.description}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    </div>
  )
}

export default Alert

// Alert.protoTypes={
//     title:PropTypes.string.isRequired,
//     description:PropTypes.string
// }