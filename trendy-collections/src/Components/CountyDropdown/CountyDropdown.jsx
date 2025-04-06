import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';

import { KENYAN_COUNTIES } from "../../data/kenyan_counties";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountyDropdown = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCounties, setFilteredCounties] = useState(KENYAN_COUNTIES);
    const [selectedCounty, setSelectedCounty] = useState("");

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredCounties(KENYAN_COUNTIES);
        } else {
            const filteredCounty = KENYAN_COUNTIES.filter((county) => {
                return county.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredCounties(filteredCounty);
        }
    }, [searchTerm]);

    const handleCountyClick = (county) => {
        setSelectedCounty(county);
        setIsOpenDialog(false);
    }

    return (
        <>
            <Button className="selectLocation" onClick={() => setIsOpenDialog(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">{selectedCounty !== "" ? selectedCounty : "Select county"}</span>
                </div>
                <span>
                    <FaAngleDown className="ms-auto" />
                </span>
            </Button>
            <Dialog
                open={isOpenDialog}
                onClose={() => setIsOpenDialog(false)}
                TransitionComponent={Transition}
                className="countyLocationDialog"
            >
                <h5>Choose your delivery location</h5>
                <p>Enter your county and we will make arrangements...</p>
                <Button className="close_" onClick={() => setIsOpenDialog(false)}><IoClose /></Button>
                <div className='headerSearch w-100' >
                    <input
                        type='text'
                        placeholder='Search your area'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button>
                        <IoIosSearch />
                    </Button>
                </div>
                <div>
                    <ul className="countyList mt-3">
                        {filteredCounties.map((county, index) => (
                            <li key={index}>
                                <Button onClick={() => handleCountyClick(county)}>{county}</Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Dialog>
        </>
    );
}

export default CountyDropdown;