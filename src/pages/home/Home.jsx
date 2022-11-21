import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Features from '../../components/features/Features'
import Property from '../../components/propertyList/Property'
import FeatureProperty from '../../components/featureProperty/FeatureProperty'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import './home.css'



const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home_container">
        <Features />
        <h1 className="home_title">Browse by property type</h1>
        <Property />
        <h1 className="home_title">Home guests</h1>
        <FeatureProperty />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
