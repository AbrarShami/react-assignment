import React from 'react'
import { Link } from 'react-router-dom';
import NavRout from './NavRout';
import ThemeSwitch from '../settings/ThemeSwitch';
import { useContext } from 'react';
import { ThemeContext } from '../settings/ThemeContext';

function Nav() {
  const {active} = useContext(ThemeContext)
  const reverseTheme = active ==='dark'? 'light' : 'dark';
  return (
    <>
        <nav className={`navbar navbar-expand bg-${active}`}>
            <div className='container'>
                <div className='row w-100'>
                    <div className='col-sm-6'>
                        <div className="">
                            <div className="navbar-nav">
                                <Link className={`nav-link active link-${reverseTheme}`} aria-current="page" to="/">Home</Link>
                                <Link className={`nav-link  link-${reverseTheme}`} to="/taskList">Tasks</Link>
                                <Link className={`nav-link  link-${reverseTheme}`} to="/setting">Settings</Link>
                            </div>
                        </div>
                    </div>
                    <div className='align-items-center col-sm-6 d-flex justify-content-end'>
                        <ThemeSwitch activeTheme={reverseTheme}/>
                    </div>
                </div>
            </div>
        </nav>
        <NavRout />  
    </>
  )
}

export default Nav;
