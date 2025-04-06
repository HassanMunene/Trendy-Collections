import React from "react";
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { GiPillow } from "react-icons/gi";
import { MdCurtains } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { MdEventSeat } from "react-icons/md";

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 navPart1">
                        <Button className='allCatTab d-flex align-items-center'>
                            <span className="icon1 me-2"><IoIosMenu /></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className="icon2 ms-2"><FaAngleDown /></span>
                        </Button>
                    </div>
                    <div className="col-sm-10 navPart2 d-flex align-items-center">
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <Link to="/">
                                    <IoMdHome className="me-2" />
                                    <Button>Home</Button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <GiPillow className="me-2" />
                                    <Button>Pillows</Button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <MdCurtains className="me-2" />
                                    <Button>Curtains</Button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <MdEventSeat className="me-2" />
                                    <Button>Seat Pads</Button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <FcAbout className="me-2" />
                                    <Button>About Us</Button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <IoIosCall className="me-2" />
                                    <Button>Contact Us</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;