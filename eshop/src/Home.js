import React from "react";
import "./Home.css";
import "./Product";
import Product from "./Product";
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <div className="home">
                <div className="home_container">
                    <img className="home_image" src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" />

                    <div className="home_row">
                        <Product 
                            id="12321341"
                            title="Bennet Mystic 15.6 inch Laptop Soulder Messenger Sling Office
                            Bar, Water Repellent Fabric for Men and Women (Blue)"
                            price={11,96}
                            rating={4}
                            image="https://static.pcdiga.com/media/catalog/product/cache/7800e686cb8ccc75494e29411e232323/l/e/lenovo_15.6_casual_toploader_t210_blue_png_01.png"
                            />
                        <Product 
                            id="12321342"
                            title="Shark AV2501S AI Robot Vacuum with HEPA Self-Empty Base, Bagless, 30-Day Capacity, LIDAR Navigation, Perfect for Pet Hair, Compatible with Alexa, Wi-Fi Connected, Black"
                            price={529,99}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/71gISOb7A+L._AC_UL320_.jpg"
                            />

                    </div>

                    <div className="home_row">
                        <Product 
                            id="12321343"
                            title="Winees Indoor Security Camera, Baby Monitor Wi-Fi Smart Home IP Camera with Motion Detection, 2-Way Audio, 2.4GHZ, Night Vision, Multi Installation Cam for Pet, Baby Works with Alexa"
                            price={54,99}
                            rating={1}
                            image="https://m.media-amazon.com/images/I/61iP2H8pAIL._AC_UY218_.jpg"
                            />
                        <Product 
                            id="12321344"
                            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                            price={186,99}
                            rating={2}
                            image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL320_.jpg"
                            />
                        <Product 
                            id="12321345"
                            title="Smart Door Lock, Yamiry Fingerprint Door Lock, Smart Deadbolt, Smart Locks for Front Door, Keyless Entry Door Lock, Electric Digital Door Lock, Bluetooth APP Door Lock with Keypad"
                            price={129,99}
                            rating={2}
                            image="https://m.media-amazon.com/images/I/61jtJhn2kAL._AC_UY218_.jpg"
                            />

                    </div>

                    <div className="home_row">
                        <Product 
                            id="12321341"
                            title="Edifier WiFi Smart Speaker Without Microphone, Works with Alexa, Supports AirPlay 2, Spotify Connect, 40W RMS One-Piece Wi-Fi and Bluetooth Sound System, MS50A"
                            price={129,99}
                            rating={3}
                            image="https://m.media-amazon.com/images/I/715snFOovPL._AC_UY218_.jpg"
                            />
                        <Product 
                            id="12321346"
                            title="CROWNFUL Smart Air Fryer Toaster Oven Combo, 10.6 Quart WiFi Convection Roaster with Rotisserie & Dehydrator, Accessories and Recipe Included, Works with Alexa & Google Assistant"
                            price={99,99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81iQgS5Js0L._AC_UY218_.jpg"
                            />

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Home;