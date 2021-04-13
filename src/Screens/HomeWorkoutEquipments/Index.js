import React from 'react'
import Footer from '../HomeScreen/Footer'
import Filter from './Filter'
import HomeWorkoutEquipmentsPoster from './HomeWorkoutEquipmentsPoster'
import HomeWorkoutProductList from './HomeWorkoutProductList'


function Index() {
    return (
        <>
            
            <HomeWorkoutEquipmentsPoster />
            <Filter />
            <HomeWorkoutProductList  />
            <Footer />
       
         
        </>
    )
}

export default Index
