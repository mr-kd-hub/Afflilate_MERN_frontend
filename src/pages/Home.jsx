import React from 'react';
import Banner from './Banner'
import Category from './Category'
import NewProducts from './Newproduct'
// import { Toolbar } from '@material-ui/core'

function Home()
{
    return(<>
         
            <Banner />
            <Category />
            <NewProducts />
    </>)
}
export default Home;