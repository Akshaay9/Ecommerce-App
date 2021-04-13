import React from 'react'
import Footer from '../HomeScreen/Footer'
import Filter from './Filter'
import ResistanceTrainingEquipmentsPoster from './ResistanceTrainingEquipmentsPoster'
import ResistanceTrainingProductList from './ResistanceTrainingProductList'

function Index() {
    return (
        <div>
            <ResistanceTrainingEquipmentsPoster />
            <Filter />
            <ResistanceTrainingProductList  />
            <Footer/>
        </div>
    )
}

export default Index
