import React from 'react'
import { Layout } from './../../components/Layout'
import projects1 from './../../assets/img/projects1.jpg'
import { Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './projects.scss'

const Projects = () => {
    return (
        <>
            <Layout />
            <div className="projects">
                <div className='pic1'>
                    <img src={projects1} className='image-projects' alt="image" width='550' ></img>
                    <Button className='plus' type='button'>
                        <Icon.PlusLg size={20} />
                    </Button>
                    <div className="overlay">
                        <div className="text">Hello World</div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </>
    )
}
export { Projects }