import React from "react";

import SocialData from "../../Data/SocialData";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import classes from "./socialLinks.module.css";
import { useSelector } from "react-redux";
const SocialLinks = (props) => {

    const nonThemeColor=useSelector(state=>state.nonThemeColor);
    return (
        <div className={`${classes.socialLinks} ${props.className}`} style={{color:nonThemeColor}}>
            <a href={SocialData.githubLink} ><GitHubIcon fontSize="large" /></a>
            <a href={SocialData.linkedInLink}><LinkedInIcon fontSize="large" /></a>
            <a href={SocialData.twitterLink}><TwitterIcon fontSize="large" /></a>
            <a href={SocialData.instaLink}><InstagramIcon fontSize="large" /></a>
            <a href={SocialData.FacebookLink}><FacebookIcon fontSize="large" /></a>
        </div>
    )
};
export default SocialLinks;