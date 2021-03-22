import React from 'react'
import img from "../../Assets/HomeScreenAssests/homeScreenMobile.jpg"
import imgTwo from "../../Assets/HomeScreenAssests/homeScreenImageTwo.jpg"
function HomeScreenHeroBanner() {
    return (
        <div>
            <div className="hero-banner-one">
                <img className="img-desktop" src="https://cdn.shopify.com/s/files/1/1367/5207/files/DUAL_DESKTOP_1440x.jpg?v=1615371476" alt="" />
                <img className="img-mobile" src={img} alt=""/>
        </div>
            <div className="hero-banner-two">
                <img className="img-desktop" src="https://cdn.shopify.com/s/files/1/1367/5207/files/Dual_Gender_Home_Comforts_1440x.jpg?v=1615371666" alt="" />
                <img className="img-mobile" src={imgTwo} alt=""/>
        </div>
        </div>
    )
}

export default HomeScreenHeroBanner
