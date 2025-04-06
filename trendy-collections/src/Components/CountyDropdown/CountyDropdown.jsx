import React, { useState } from "react";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountyDropdown = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    return (
        <>
            <Button className="selectLocation" onClick={() => setIsOpenDialog(true)}>
                <div className='info d-flex flex-column'>
                    <span className="label">Your Location</span>
                    <span className="name">Nairobi</span>
                </div>
                <span>
                    <FaAngleDown className="ms-auto" />
                </span>
            </Button>
            <Dialog open={isOpenDialog} onClose={() => setIsOpenDialog(false)} TransitionComponent={Transition} className="countyLocationDialog">
                <h5>Choose your delivery location</h5>
                <p>Enter your county and we will make arrangements...</p>
                <Button className="close_" onClick={() => setIsOpenDialog(false)}><IoClose /></Button>
                <div className='headerSearch w-100' >
                    <input type='text' placeholder='Search your area' />
                    <Button>
                        <IoIosSearch />
                    </Button>
                </div>
                <div>
                    <ul className="countyList mt-3">
                        <li onClick={() => setIsOpenDialog(false)}><Button>Nairobi</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Mombasa</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Nakuru</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Kiambu</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Machakos</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Nyeri</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Meru</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Kajiado</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Kericho</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Uasin Gishu</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Nyandarua</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Bomet</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Narok</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Laikipia</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Embu</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Tharaka Nithi</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Isiolo</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>Samburu</Button></li>
                        <li onClick={() => setIsOpenDialog(false)}><Button>West Pokot</Button></li>
                    </ul>
                </div>
            </Dialog>
        </>
    );
}

export default CountyDropdown;