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
            <div className="hero-banner-three">
            <>
                    <img src="https://cdn.shopify.com/s/files/1/1367/5207/files/07_01_Shop_mens_ad779213-0fed-41df-a3ab-2f5245a07264_1440x.jpg?v=1615371691" alt="" />
                </>
                <>
                    <img className="yoga-banner" src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </>
            </div>
            
        </div>
    )
}

export default HomeScreenHeroBanner
