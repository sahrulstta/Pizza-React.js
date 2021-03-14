import React from 'react'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconsLink} from './FooterElement'
import {FaFacebook, FaInstagram,FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconsLink href='/' target='_blank' arial-label='Facebook' rel='noopener noreferrer'><FaFacebook /></SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' arial-label='Instagram' rel='noopener noreferrer'><FaInstagram /></SocialIconsLink>
                            <SocialIconsLink href='/' target='_blank' arial-label='Twitter' rel='noopener noreferrer'><FaTwitter /></SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
