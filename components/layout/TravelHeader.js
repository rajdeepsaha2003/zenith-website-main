import { useRef } from "react"
import Link from "next/link"
import NavConstant from "../../constant/HeaderConstant/NavConstant"
import Image from "next/image"
import { useIsVisible } from "react-is-visible"

const TravelHeader=()=>{

const navToggle = useRef(null)
const navHambargar = useRef(null)

const navRef = useRef()
const isVisible = useIsVisible(navRef)

// toggle nav
async function ToggleNav(){
    try{
    navHambargar.current.classList.toggle('h-active')
    navToggle.current.classList.toggle('slidenav')
    }catch(err){}
}

// toggle sub menu
async function ToggleSubMenu(e){
    try{
    if(e.target.nextSibling.style.display==="block"){
        e.target.nextSibling.style.display="none"
        e.target.innerHTML="+"
    }else{
        e.target.nextSibling.style.display="block"
        e.target.innerHTML="-"
    }
    }catch(err){}
}

return(
<>

<nav ref={navRef}>
<div className={`header-menu-area trip-menu ${isVisible?'':'sticky'}`}>
<div className="container">
<div className="row align-items-center">
    <div className="col-xxl-3 col-xl-2 col-lg-2 col-sm-6 col-6">
        <div className="logo text-left">
          <Link href="/"legacyBehavior><a><Image src={NavConstant.Logo} alt="" width="173" height="50"/></a></Link>
        </div>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-8 col-sm-6 col-6">
        <div className="hidden-lg hamburger" ref={navHambargar} onClick={ToggleNav}>
            <span className="h-top"></span>
            <span className="h-middle"></span>
            <span className="h-bottom"></span>
        </div>
        <nav className="main-nav" ref={navToggle}> 
            <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                <a><Image src={NavConstant.Logo} alt="" width="173" height="50"/></a>
            </div>
            <ul>
                <li className="has-child-menu">
                    <Link href="/"legacyBehavior><a className="active">Home</a></Link>
                    <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                    <ul className="sub-menu">
                        <li><Link href="https://lms-eight-chi.vercel.app"legacyBehavior><a>Online Course</a></Link></li>
                        <li><Link href="https://zenithinstitute.theonlinetests.com/"legacyBehavior><a>Online Test</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/about"legacyBehavior><a>About</a></Link></li>
                <li><Link href="/services"legacyBehavior><a>Courses</a></Link></li>
                <li><Link href="/results"legacyBehavior><a>Results</a></Link></li>
                <li className="has-child-menu">
                    <Link href="/"legacyBehavior><a>Blog</a></Link>
                    <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                    <ul className="sub-menu">
                        <li><Link href="/"legacyBehavior><a>Blog</a></Link></li>
                        <li><Link href="/"legacyBehavior><a>Blog Details</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/contact"legacyBehavior><a>Contact </a></Link></li>
            </ul>
            <div className="menu-btn-wrap d-block d-lg-none">
            <Link href="/contact"legacyBehavior><a className="tri-btn-fill">Contact</a></Link>
            </div>
        </nav>
    </div>
    <div className="col-xxl-3 col-xl-4 col-lg-2 d-none d-lg-block">
        <div className="menu-btn-wrap">
            <Link href="/"legacyBehavior><a className="tri-btn-fill">Contact</a></Link>
        </div>
    </div>
</div>
</div>
</div>
</nav>
</>
)
}
export default TravelHeader