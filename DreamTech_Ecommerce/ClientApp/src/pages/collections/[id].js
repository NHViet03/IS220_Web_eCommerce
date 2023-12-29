import React from 'react'
import { useParams } from 'react-router-dom'
import ChuotPage from './chuot';
import LaptopPage from './laptop';
import PCPage from './pc';
function Collections() {
  const collections = useParams();
  return (
    <div>
     { collections.sub_page === 'chuot' && <ChuotPage />}
     { collections.sub_page === 'pc' &&   <PCPage />}
     { collections.sub_page === 'laptop' && <LaptopPage />}
    </div>
  )
}

export default Collections
