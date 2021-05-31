import React from 'react'
import { Layout } from '../../components/Layout'
import Bg from './../../assets/img/main-bg.jpg'
import './home.scss'

const Home = () => {
    return (
        <>
            <Layout />
            <div className='home-container' style={{
                backgroundImage: `url(${Bg})`
            }}>
                <div className='title-container'>
                    <h1 className='home-title'>lorem ipsum dolor</h1>
                    <h2 className='home-h2'>dolore magna</h2>
                </div>
            </div>
        </>
    )
}
export { Home }