import React from 'react'
import { Layout } from '../../components/Layout'
import './home.scss'

const Home = () => {
    return (
        <>
            <Layout />
            <div className='section-a'>
                <div className='wrapper-home'>
                    <div className='main-title'>
                        <h2><i>We bring your ideas to life.</i></h2>
                        <h1 className='brand'>Whatever Design</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export { Home }