import React from 'react'
import { Layout } from '../../components/Layout'
import * as Icon from 'react-bootstrap-icons'
import map from './../../assets/img/map.jpg'
import './contact.scss'

const Contact = () => {
    return (
        <>
            <Layout />
            <div className='contact-main'>
                <div class="split left">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card-contact">
                                <div class="card-body">
                                    <h5 class="card-h1">Contáctenos a través de nuestro email, teléfono o visítenos en nuestras oficinas!</h5>
                                    <div className='card-p'>
                                        <ul class="list-group">
                                            <li class="list-group-item">An item</li>
                                            <li class="list-group-item">A second item</li>
                                            <li class="list-group-item">A third item</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="split right">
                        <div class="centered">
                            <div class="map">
                                <img className='map-img' src={map}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Contact }