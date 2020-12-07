import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import Profile from './pages/profile'
import Summary from './pages/summary'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './Nav'

export default function App(){
    let [data, setData] = useState({})
    
    useEffect(()=>{
        async function getData(){
            let res = await fetch('https://indapi.kumba.io/webdev/assignment')
            let data = await res.json()
            setData(data)
        }
        getData()
    }, [])
    return(
        <div>
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" render={(props)=> <Profile {...props} data={data.user} />} />
                <Route exact path="/summary" render={(props)=> <Summary {...props} data={data} />} />
            </Switch>
        </BrowserRouter>
        </div>
    )
}
