import React from 'react'
import PropTypes from "prop-types";

import { Link } from 'react-router-dom'


const Button = (props) => {

    const {
        className, onClick, label, isDisabled
    } = props;

    return (
        <Link to="/uiportfolio">
            <button className="btn-animate" onClick={onClick}>
                <span className={className} disabled={isDisabled}>
                    <span>{label}</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </span>
            </button>

        </Link>
    )
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    isDisabled: PropTypes.bool
};

Button.defaultProps = {
    className: "cta",
    onClick: null,
    label: "View more ",
    isDisabled: false
};



export default Button