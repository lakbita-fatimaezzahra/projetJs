 import React from 'react'
 import Pizzas from '../dataPizza'
import Pizza from '../components/Pizza'
 export default function homeScreen() {
    return(
     
            <div className="row" >
                {Pizzas.map((pizza) => (
                    <div className="col-md-4 p-3" >
                          <div>
                        <Pizza pizza={pizza} />
                    </div>
                    </div>
                ))}
            </div>
        );
     
 }