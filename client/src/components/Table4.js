import React, { useState } from 'react'
import './Table4.css'
import data from './mock-data.json'
// import { Contacts } from '@material-ui/icons';
export const Table4 = () => {
    const [guests, addGuests] = useState(data);
    const deleteRow = (guestID) => {
        const newGuests = [...guests];
        const index = guests.findIndex((guest) => guest.id === guestID)
        newGuests.splice(index, 1);
        addGuests(newGuests);
    }
    return (
        <div className='app-container'>
            <h3> ___________________________________________________________________________________Upcoming Bookings______________________________________________________________________________</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>GuestName</th>
                        <th>BookedOn</th>
                        <th>Arrival Date</th>
                        <th>Payment Done/Pending</th>
                        <th>Booking Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {guests.map((guest) =>
                        <tr>
                            <td>{guest.id}</td>
                            <td>
                                <button type="button" class="btn btn-outline-info">{guest.name}</button>
                            </td>
                            <td>{guest.bookedOn}</td>
                            <td>{guest.arrivalDate}</td>
                            <td>{guest.payment}</td>
                            <td>{guest.category}</td>
                            <td>
                                <button type="button" class="btn btn-danger" onClick={() => deleteRow(guest.id)}>Cancel</button>
                            </td>

                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}
