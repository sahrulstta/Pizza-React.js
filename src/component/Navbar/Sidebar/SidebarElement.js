import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const Sidecontainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height:100%;
    background:#ffc500;
    display: grid;
    aligen-items:center;
    top:0;
    transition:0.3s ease-in-out;
    right: ${({isOpen})=>(isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px){
        width: 100%;
    }
`;

export const Closeicon = styled(FaTimes)`
    color: #000;
`;

export const Icons = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:none;
`;

export const Sidemenu = styled.div`
    padding-top:100px;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-aligen: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3, 60px);
    }
`;

export const Sidelink = styled(Link)`
    display:flex;
    aligen-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-styl:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#000;
    cursor: pointer;
    

    &:hover{
        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`;

export const Sidewarp = styled.div`
    display:block;
    justify-content:center;
`;

export const SidebarRoute = styled.div`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 40%;
    color:#fff;
    font-size:20px;
    outline: none;
    border:none;
    cursor:pointer;
    transition:0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: 0.2s ease-in-out;
        backgroind: #fff;
        color:#010606;
    }
`;