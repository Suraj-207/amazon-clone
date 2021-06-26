import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                
                <img className="home_image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
                alt="">
                </img>
            
                <div className="home_row">
                    
                    <Product
                    id="07989"
                    price="19.29"
                    title="Rework shows you a better,faster, easier way to succeed in business"
                    image="https://images-na.ssl-images-amazon.com/images/I/71SqvmjaM3L.jpg"
                    rating={5} />
                    <Product
                    id="456765" 
                    price="13.29"
                    title="The Subtle art of not giving a F*ck-by Mark Manson"
                    image="https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg"
                    rating={5} />
                    <Product
                    id="09875656"
                    price="10"
                    title="Ikigai: The Japanese Secret to a Long and Happy Life"
                    image="https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg"
                    rating={5} />
                </div>

                <div className="home_row">
                    <Product 
                    id="1326545"
                    price="719.90"
                    title='HP Envy X360: 15.6" FHD IPS Touchscreen, 2019 Flagship 2 in 1 Laptop'
                    image="https://images-na.ssl-images-amazon.com/images/I/71PJq3mapEL._SX466_.jpg"
                    rating={4} />
                    <Product
                    id="2134006"
                    price="1899.00"
                    title="Apple MacBook Pro with Intel Processor"
                    image="https://images-na.ssl-images-amazon.com/images/I/71bElkQQ7LL._AC_SL1500_.jpg"
                    rating={4} />
                    <Product 
                    id="4017934"
                    price="981.85"
                    title='Lenovo Legion 5 Gaming Laptop, 15.6" FHD (1920x1080) IPS Screen'
                    image="https://images-na.ssl-images-amazon.com/images/I/81w%2B3k4U8PL._AC_SL1500_.jpg"
                    rating={3}/>
                </div>

                <div className="home_row">
                    <Product
                    id="4013245"
                    price="1227.99"
                    title="Sony X800H 75 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model & Soundbar with Wireless Subwoofer"
                    image="https://images-na.ssl-images-amazon.com/images/I/81R9w-DoyAL._AC_SL1500_.jpg"
                    rating={4} />    
                </div>
            </div> 
        </div>
    )
}

export default Home
