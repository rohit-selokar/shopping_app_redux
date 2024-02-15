import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const items = useSelector((state)=>state.cart)
    return (
        <div className='h-14 bg-slate-900 text-white'>
            <ul className='flex justify-evenly p-4'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                {/* <li>
                    <div>
                        <input className='pl-1 p-[2.5px] rounded-l-md'
                        placeholder='search'/>
                        <i class="fa-solid fa-magnifying-glass bg-orange-400 text-black p-[6.2px] rounded-e-md "></i>
                    </div>
                </li> */}
                
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/cart">
                        Items:{items.length}
                    </Link>
                </li>
            
            </ul>
        </div>

    )
}

export default Header
