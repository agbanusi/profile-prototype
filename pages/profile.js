import React from 'react'
import { useState } from 'react'
import male from '../male.svg'
import './style.css'


export default function Profile({data}) {
    const [like, setLike] = useState(true)
    
    const toggle=()=>{
        let soc = document.getElementById('change')
        if(like){
            soc.classList.add('changer')
        }else{
            soc.classList.remove('changer')
        }
        setLike(!like)
    }
    return (
        <div className='cover'>
        {data?<div className="profile-cover">
            <img src={male} />
            <h1>{data.name}</h1>
            <a href={'tel:'+data.phone}><h3>{data.phone} </h3></a>
            <div className='about'>
                <h2>ABOUT</h2>
                <hr />
                <p>{data.about}</p>
            </div>
            <div className='about address'>
                <h2>ADDRESS</h2>
                <hr />
                <p>{data.address}</p>
            </div>
            <div className='toggle'>
                <div className='nav'><p onClick={()=>toggle('like')}>Likes</p> | <p  onClick={()=>toggle('dislike')}>Dislikes</p></div>
                <hr id='change'/>
                {like?<ul>
                    {data.likes.map(i=>
                        <li><h4>{i}</h4></li>
                    )}
                </ul>:<ul>
                        {data.dislikes.map(i=>
                            <li><h4>{i}</h4></li>
                        )}
                    </ul>}

            </div>
        </div>
        :<></>}
        </div>
    )
}
