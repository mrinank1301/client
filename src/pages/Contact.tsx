import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Hero1 from '@/components/Hero1'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Helmet } from 'react-helmet-async'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Argosian</title>
        <meta name="description" content="Get in touch with our team. We're here to help answer your questions and provide the support you need." />
        <meta name="keywords" content="contact us, support, help, customer service, reach out" />
        <link rel="canonical" href="https://argosianresources.com/contact" />
      </Helmet>
      <div>
        <Navbar/>
        <main>
        <Hero1
        backgroundImage="/contact.svg"
        tagline=""
        heading="Contact Us"
        subheading="We're here to help you with your commodity trading needs. Get in touch with us today."
        />   
        <ContactForm/>
        </main>
        <Footer/> 
      </div>
    </>
  )
}

export default Contact