import React from 'react'
import Footer from '../HomeScreen/Footer'
import Filter from './Filter'
import ProductScreenList from './ProductScreenList'
function Index() {
    return (
      <div>
        {/* poster */}
              <div>
        <div className="page-desc">
          <div className="page-desc-content">
            <h3>Accessories</h3>
            <h1>WOrkout</h1>
          </div>
        </div>
        </div>
        
        <Filter />
        <ProductScreenList  />
        <Footer />
        
        </div>
    )
}

export default Index
