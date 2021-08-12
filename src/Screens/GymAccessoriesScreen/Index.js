import React from 'react'
import Footer from '../HomeScreen/Footer'
import Filter from './Filter'
import GymAccessoriesProductList from './GymAccessoriesProductList'
import YogaPoster from './GymAccessoryScreenPoster'

function Index() {
    return (
        <div>
            <YogaPoster />
            <Filter />
            <GymAccessoriesProductList  />
            <Footer/>
        </div>
    )
}

export default Index
