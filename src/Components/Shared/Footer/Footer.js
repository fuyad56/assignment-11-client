import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='bg-[#F6F6F6]'>
            <div className='desktop:pt-[200px] laptop:pt-[80px] phone:pt-[40px] tablet:pt-[70px] mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] pb-[100px]'>
                <div className='grid desktop:grid-cols-4 laptop:grid-cols-2 tablet:grid-cols-1 phone:grid-cols-1 gap-6'>
                    <div className='flex justify-between items-start w-auto mt-8'>
                        <FontAwesomeIcon icon={faLocationDot} className='mt-1 text-2xl' />
                        <h3 className='mr-4'>H#000 (0th Floor), Road #00, <br />
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </h3>
                    </div>
                    <div>
                        <ul>
                            <li><h3 className='text-xl font-semibold'>Company</h3></li>
                            <li><h5>About</h5></li>
                            <li><h5>Project</h5></li>
                            <li><h5>Our Team</h5></li>
                            <li><h5>Terms & Conditions</h5></li>
                            <li><h5>Submit Listing</h5></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h3 className='text-xl font-semibold'>Quick Links</h3></li>
                            <li><h5>Quick Links</h5></li>
                            <li><h5>Rentals</h5></li>
                            <li><h5>Sales</h5></li>
                            <li><h5>Contact</h5></li>
                            <li><h5>Our Blog</h5></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h3 className='text-xl font-semibold'>About us</h3></li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Purus commodo ipsum
                                    duis laoreet maecenas. Feugiat </p>
                            </li>
                        </ul>
                        <ul className='flex justify-between items-center text-3xl mt-2 w-[250px]'>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} /></li>
                            <li><FontAwesomeIcon icon={faLinkedin} /></li>
                            <li><FontAwesomeIcon icon={faYoutube} /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright TSC Electronics {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;