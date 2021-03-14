import React, {useState} from 'react'
import Navbar from '../Index'
import Sidebar from '../Sidebar/Index';
import { HeroContainer, HeroConten, HeroItem, HeroH1, HeroP, HeroBtn } from './HeroElement';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroConten>
                <HeroItem>
                    <HeroH1>Greates Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 second</HeroP>
                    <HeroBtn>Plance Order</HeroBtn>
                </HeroItem>
            </HeroConten>
        </HeroContainer>
    );
};

export default Hero
