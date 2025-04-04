import React from "react";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";

const CountyDropdown = () => {
    return (
        <Button className="selectLocation">
            <div className='info d-flex flex-column'>
                <span className="label">Your Location</span>
                <span className="name">Nairobi</span>
            </div>
            <span>
                <FaAngleDown className="ms-auto"/>
            </span>
        </Button>
    );
}

export default CountyDropdown;