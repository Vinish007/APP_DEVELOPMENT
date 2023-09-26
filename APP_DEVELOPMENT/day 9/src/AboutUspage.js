import React, { Component } from 'react'
import '../src/AboutUspage.css'
import Navbar from './NabBar';
import Footer from './footer';
function AboutUs() {
    return (
        <>
            <Navbar />
            <div className='about'>
            <h1 className='design'>About us</h1>
            <p>..................................................................................................................................</p>
            <h1>Bringing the WildLife Back</h1>
            <p>..................................................................................................................................</p>
            <div className='pic'>
                <img src='https://www.wildlifetrusts.org/sites/default/files/styles/spotlight_single_lap/public/2017-12/Kingfisher%20%C2%A9jonhawkinsSurreyHillsPhotography.webp?h=7d6ddefd&itok=-JxLzQbr' style={{width:1263,height:550}}/>
            </div>
            <h1>Our purpose is to bring wildlife back, to empower people to take meaningful action for nature, and to create an inclusive society where nature matters. 
Our vision is of a thriving natural world, with our wildlife and natural habitats playing a valued role in addressing the climate and ecological emergencies, and everyone inspired to get involved in nature’s recovery.</h1>
            </div>
            <div className='about'>
                <p>......................................................................................................................................</p>
            <h1 className='design'>Many Wildlife Trusts were set up in order to take ownership of a particular piece of land so that its wildlife could be saved for future generation. For example: Norfolk Wildlife Trust was set up in 1926 in order to own Cley Marshes - a marsh on the north Norfolk coast that was used for shooting wild birds. Lincolnshire Wildlife Trust was formed in 1948 to take on management of Gibraltar Point. Wiltshire Wildlife Trust was set up in 1963 to take on Blackmoor Copse, one of the last places in the county that was home to the purple emperor butterfly. Today you can visit all these places, and many many more, and experience the wildlife and habitats that our founders worked so hard to save.</h1>
            <i>..................................................................................................................................</i>
            {/* <p>One brand, many companies, and many, many people – that’s us in a nutshell. Spread all over the world, we have a passion for home furnishing and an inspiring shared vision: to create a better everyday life for the many people. This, together with our straightforward business idea, shared values, and a culture based on the spirit of togetherness, guides us in everything we do.</p> */}
            <div className='about'>
            <h1 className='design'>Empowering the people</h1>
            </div>
            <div className='pic'>
                <img src='https://www.wildlifetrusts.org/sites/default/files/styles/spotlight_single_lap/public/2018-04/MR4_5345.webp?h=863f27fd&itok=70tbjHf7' style={{width:1263,height:550}}/>
            </div>
            </div>
            <div className='about'>
            <h1>Many people feel unwelcome and unsafe in green spaces or are unable to access wild places close to where they live. Too often, this is associated with underlying issues in society of discrimination, privilege, or oppression. The environment sector must do more to overcome this and, at The Wildlife Trusts, we want to play our part to ensure that our internal culture is inclusive. We are working to engage and empower people of all ages, identities, cultures, backgrounds and abilities, supporting them to value, enjoy, speak up and take action for wildlife. We are connecting people with natural spaces through community engagement and by creating safe wild places close to where people live, work, and play.</h1>
            </div>
            <div className='about'>
            {/* <h2 className='design'>More than a retailer</h2> */}
            </div>
            <Footer />

        </>

    );
}

export default AboutUs;