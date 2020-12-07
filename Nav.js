import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div className="dopple">
            <ul>
                <li><Link to='/'>Profile</Link></li>
                <li><Link to='/summary'>Order Summary</Link></li>
            </ul>
        </div>
    )
}
