import React from 'react'
import Footer from './Footer'
import HomeScreenHeroBanner from './HomeScreenHeroBanner'
import Nav from './Nav'

function Index() {
    return (
        <>
            {/* navigation bar of Home Screen */}
            <Nav />

            {/* Home scrren banners */}
            <HomeScreenHeroBanner />
            
            {/* {footer} */}
            <Footer/>
        </>
    )
}

export default Index
