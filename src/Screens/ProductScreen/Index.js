import React from 'react'
import Footer from '../HomeScreen/Footer'
import Filter from './Filter'
function Index() {
    return (
        <div>
              <div>
        <div className="page-desc">
          <div className="page-desc-content">
            <h3>Accessories</h3>
            <h1>WOrkout</h1>
          </div>
        </div>
      </div>
        <Filter />
        <Footer/>
        </div>
    )
}

export default Index
