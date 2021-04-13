import React from 'react'
import Footer from '../HomeScreen/Footer'
import Filter from './Filter'
import YogaPoster from './YogaPoster'
import YogaProductList from './YogaProductList'

function Index() {
    return (
        <>
            <YogaPoster />
            <Filter />
            <YogaProductList />
            <Footer/>
        </>
    )
}

export default Index
