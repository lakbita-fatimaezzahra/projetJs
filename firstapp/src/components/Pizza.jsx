import React, { useState } from 'react';
import {Modal} from 'react-bootstrap';
export default function Pizza({ pizza }) {
    const [quantite, setQuantite] = useState(1);
    const [varients, setVarients] = useState('small');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{ margin:'50px'}} className='shadow-lg p-3 mb-5 bg-white rounded  ' >
            <div onClick={handleShow }>
            <h2>{pizza.name}</h2>
            <img src={pizza.image} alt={pizza.name}  className="img-fluid"style={{ width: '190px', Height: '190px', margin: '0 auto'  }}   />
            </div>
            <div className="flex-container text-start ">
                {/* Section Taille */}
                <div className="w-100 m-1">
                    <p>Taille</p>
                    <select  className='form-control' value={varients} onChange={(e) => setVarients(e.target.value)}>
                        {pizza.varients.map((varient, index) => (
                            <option key={index} value={varient}>
                                {varient}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Section Quantité */} 
                <div className="w-100 m-1">
                    <p>Quantité</p>
                    <select  className='form-control'value={quantite} onChange={(e) => setQuantite(Number(e.target.value))}>
                        {[...Array(10).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Section Prix */}
            <div className="flex-container text-start">
                <div className=" m-2 w-100">
                    <p>Price:{pizza.prices[0][varients] * quantite} $</p>
                </div>
                <div className=" m-1 w-100">
                    <input type="submit" value="Add to cart" className='btn' />
                </div>
            </div>
            <Modal show={show}   >
        <Modal.Header closeButton onClick={handleClose} >
          <Modal.Title><h2>{pizza.name}</h2></Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img src={pizza.image} alt={pizza.name} className="img-fluid" style={{ width: '200px' ,height:"200", margin: '0 auto' }}  />
        <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
         <button className='btn' onClick={handleClose} >Close</button>
     
        </Modal.Footer>
      </Modal>
        </div>
    );
}
