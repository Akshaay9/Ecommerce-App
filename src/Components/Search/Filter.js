import React from 'react'
import SearchBarProducts from './SearchBarProducts'
import { mensNewDropProductListAPI } from "../../API/MensNewDropProducts";
mensNewDropProductListAPI();
function Filter() {
    return (
        <div>
             <SearchBarProducts/>
        </div>
    )
}

export default Filter
