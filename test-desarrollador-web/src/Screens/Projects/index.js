import React from 'react'
import { Layout } from './../../components/Layout'
import pic1 from './../../assets/img/pic1.jpg'
import pic2 from './../../assets/img/pic2.jpg'
import pic3 from './../../assets/img/pic3.jpg'
import { Button, CardGroup, Card } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import './projects.scss'

const Projects = () => {
    return (
        <>
            <Layout />
            <CardGroup>
                <Card>
                    <Card.Img className='card-img' variant="top" src={pic1} />
                    <Card.Body className='text'>
                        <Card.Title className='text-h1'>Project Name</Card.Title>
                        <Card.Text className='text-p'>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img className='card-img' variant="top" src={pic2} />
                    <Card.Body className='text'>
                        <Card.Title className='text-h1'>Project Name</Card.Title>
                        <Card.Text className='text-p'>
                            Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Img className='card-img' variant="top" src={pic3} />
                    <Card.Body className='text'>
                        <Card.Title className='text-h1'>Project Name</Card.Title>
                        <Card.Text className='text-p'>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </CardGroup>
        </>
    )
}
export { Projects }