import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core"
import Search from './Search'
function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
            <div className="banner_search">
                {showSearch && <Search />}
                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className='banner_searchButton'
                    variant='outlined'>
                    Check Availability
                </Button>
            </div>
            {/* <div className='banner_info'>
                <h1>Hello , stretch you r Imagination</h1>
                <h5>Plan a gateway to iit ropar</h5>
                <Button variant='outlined'>
                    Check Availability
                </Button>
            </div> */}


        </div>
    )
}

export default Banner