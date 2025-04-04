import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';

import Logo from '../../assets/images/trendy_collections_logo4.png';
import CountyDropdown from '../CountyDropdown/CountyDropdown';

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
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
                                    <input type='text' placeholder='Search for products...'/>
                                    <Button>
                                        <IoIosSearch />
                                    </Button>
                                </div>
                                {/* header search ends here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;