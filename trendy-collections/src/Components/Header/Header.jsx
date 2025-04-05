import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCartOutline } from "react-icons/io5";

import Logo from '../../assets/images/trendy_collections_logo4.png';
import CountyDropdown from '../CountyDropdown/CountyDropdown';

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className='top-strip bg-purple'>
                    <div className='container'>
                        <p className='mb-0 mt-0 text-center'>
                            📞 Need help? Call us at <a href="tel:+254712403671" className="text-white">0712 403 671</a> | Fast & friendly support!
                        </p>
                    </div>
                </div>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to="/">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountyDropdown />
                                {/* header search starts here */}
                                <div className='headerSearch ms-3 me-3'>
                                    <input type='text' placeholder='Search for products...' />
                                    <Button>
                                        <IoIosSearch />
                                    </Button>
                                </div>
                                {/* header search ends here */}

                                <div className='part3 ms-auto'>
                                    <div className='ms-auto cartTab d-flex align-items-center'>
                                        <span className='price'>ksh 700</span>
                                        <div className='position-relative ms-2'>
                                            <Button className='circle'><IoCartOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;