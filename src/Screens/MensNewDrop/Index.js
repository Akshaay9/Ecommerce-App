import React from 'react'
import Filter from './Filter'
import ScreenTwoPoster from './MensNewDropPoster'
import "./App.css"
import Footer from '../HomeScreen/Footer'
import MensNewDropProductList from './MensNewDropProductList'

function Index() {
    return (
        <>
            

        {/* poster */}
            <ScreenTwoPoster />

            {/* filter */}
            <Filter />

            {/* products */}
            <MensNewDropProductList />

            {/* footer */}
            <Footer/>
          
        </>
    )
}

export default Index
