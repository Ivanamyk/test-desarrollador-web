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

            </body>
        </>
    )
}
export { Home }