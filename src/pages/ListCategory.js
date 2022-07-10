import React from 'react'
import Footer from '../components/Footer'
import LastPost from '../components/ListCategory/LastPost'
import ListCart from '../components/ListCategory/ListCart'
import Social from '../components/ListCategory/Social'
import Navbar from '../components/Navbar'



const ListCategory = () => {
  return (
    <div>
        <Navbar/>
          <div className="flex-col md:flex-col lg:flex-col  ">
                 <Social/>
                <ListCart/>
                <LastPost/>
          </div>
        <Footer/>
    </div>
  )
}

export default ListCategory