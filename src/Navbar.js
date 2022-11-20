import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./true_Logo.png"
// import SearchBar from "./Features/Components/filter_selecter"

import { useState } from "react"

export default function Navbar() {
    
    const [navbarState,setNavbarState] = useState(false)

    const Changebg = () => {
        
        if(window.scrollY >= 80 ){
            setNavbarState(true)
        } else{
            setNavbarState(false)
        }
    }

    window.addEventListener('scroll',Changebg)

    return <nav className={navbarState ? 'nav active' : 'nav'}>
        <Link to="/" className="Site-title"><img src={logo} /><p>Hamster Hub</p></Link>
        {/* <SearchBar placehover="Search" />data={ students } */}
        <ul >
            {/* <CostomLink to="/student">Student</CostomLink> */}
            {/* <CostomLink to="/Anal">Analyze</CostomLink> */}
            
            {/* <CostomLink to="/person">Person</CostomLink> */}
            <CostomLink to="/class" >Class</CostomLink>
        </ul>
    </nav>
}

function CostomLink({ to,children, ...props}) {
    const resolvepath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvepath.pathname,end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}