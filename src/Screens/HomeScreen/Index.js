import React from 'react'
import HomeScreenHeroBanner from './HomeScreenHeroBanner'
import Nav from './Nav'

function Index() {
    return (
        <div>
            {/* navigation bar of Home Screen */}
            <Nav />
            
            {/* Home scrren banner */}
            <HomeScreenHeroBanner/>
            
        </div>
    )
}

export default Index
