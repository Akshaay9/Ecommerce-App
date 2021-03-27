import React from 'react'
import Filter from './Filter'
import ScreenTwoPoster from './MensNewDropPoster'
import MensNewDropProductList from './MensNewDropProductList'
import "./App.css"

function Index() {

    return (
        <>
            <ScreenTwoPoster />
            <Filter />
            <MensNewDropProductList/>
        </>
    )
}

export default Index
