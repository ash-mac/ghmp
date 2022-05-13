import React, { useState } from 'react'
// import data from "./mock-data.json";
import { Table4 } from './Table4'
import Banner from './Banner'
function UserProfile() {
    // const [booking, showBooking] = useState(data);
    return (
        <div className="userProfile">
            <Banner />
            <Table4 />
        </div>
    )
}

export default UserProfile