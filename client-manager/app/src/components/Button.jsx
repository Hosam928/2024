import React from "react";

const Button = ({value}) => {
    <button>{value}</button>
}

Button.propTypes = {
    value: PropTypes.string.isRequired
}

export default Button