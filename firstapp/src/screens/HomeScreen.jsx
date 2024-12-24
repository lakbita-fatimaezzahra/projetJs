 import React from 'react'
 import Pizzas from '../dataPizza'
import Pizza from '../components/Pizza'
import Search from '../components/Search';
 export default function homeScreen() {
    return(
        <div style={{ marginTop: '90px' ,marginBottom:'40px'}}>
        <Search />
            <div className="row" >
                {Pizzas.map((pizza) => (
                    <div className="col-md-4 p-3" >
                          <div>
                        <Pizza pizza={pizza} />
                    </div>
                    </div>
                ))}
            </div></div>
        );
     
 }