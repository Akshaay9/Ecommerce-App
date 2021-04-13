import React from 'react'
import Footer from '../HomeScreen/Footer'
import Filter from './Filter'
import WeomensNewDropPoster from './WeomensNewDropPoster'
import WomensNewDropProductListing from './WomensNewDropProductListing'


function Index() {
    return (
        <>
            <WeomensNewDropPoster />
            <Filter />
            <WomensNewDropProductListing  />
            <Footer/>
            
        </>
    )
}

export default Index
