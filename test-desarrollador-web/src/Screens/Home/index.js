import React from 'react'
import { Layout } from '../../components/Layout'
import Bg from './../../assets/img/main-bg.jpg'
import './home.scss'

const Home = () => {
    return (
        <>
            <Layout />
            <body style={{
                backgroundImage: `url(${Bg})`
            }}>
                <div className='home-container'>
                    <h1 className='home-title'>lorem ipsum dolor</h1>
                    <h2 className='home-h2'>dolore magna</h2>
                </div>
            </body>
        </>
    )
}
export { Home }