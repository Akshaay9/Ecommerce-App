import React from 'react'
import { mensNewDropProductList } from '../../API/MensNewDropProducts'
import Filter from './Filter'
import ScreenTwoPoster from './MensNewDropPoster'
import MensNewDropProductList from './MensNewDropProductList'
import "./App.css"

function Index() {
    mensNewDropProductList()
    return (
        <>
            <ScreenTwoPoster />
            <Filter />
            <MensNewDropProductList/>
        </>
    )
}

export default Index
