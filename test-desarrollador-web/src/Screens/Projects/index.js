import React from 'react'
import { Layout } from './../../components/Layout'
import box1 from './../../assets/img/box1.jpg'
import box2 from './../../assets/img/box2.jpg'
import box3 from './../../assets/img/box3.jpg'
import './projects.scss'

const Projects = () => {
    return (
        <>
            <Layout />
            <div id='section-a'>
                <div className='wrapper'>
                    <h2 className='title'>Projects</h2>
                    <div className='box-1'>
                        <img src={box1} alt='image-1'></img>
                        <div className='description1'>
                            <h3>Loren Ipsum</h3>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='box-2'>
                        <img src={box2} alt='image-2'></img>
                        <div className='description2' id='num2'>
                            <h3>Loren Ipsum</h3>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='box-3'>
                        <div className='description3'>
                            <h3>Loren Ipsum</h3>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <img src={box3} alt='image-3'></img>
                    </div>
                </div>



                <div id="carouselExampleControls" className="carousel slide slider" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={box1} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <img src={box2} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <img src={box3} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </>
    )
}
export { Projects }