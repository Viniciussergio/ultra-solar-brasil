import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import ultraSolarLogo from '../../config/images/ultra-solar-logo.png';
import { Nav, LogoContainer, SocialMedias, Contato, Orcamento } from './styled';

export default function Header() {
  return (
    <>
      <Orcamento>
        <div>
          <GiIcons.GiTalk size={150} />
          <h1>Fale com um especialista</h1>
        </div>
        <p>
          Solicite o contato de um especialista em sistemas de energia solar e
          receba um orçamento personalizado
        </p>
        <button type="button">Solicite um orçamento</button>
      </Orcamento>
      <Nav>
        <LogoContainer>
          <img src={ultraSolarLogo} alt="Logo da Empresa" />
          <SocialMedias>
            <FaFacebookF size={22} color="#061b3d" />
            <Ai.AiOutlineInstagram size={25} color="#061b3d" />
            <Ai.AiFillYoutube size={25} color="#061b3d" />
            <Ai.AiFillLinkedin size={25} color="#061b3d" />
          </SocialMedias>
        </LogoContainer>
        <Contato>
          <h1>Contato</h1>
          <h2>(41)3298-3489</h2>
          <h2>(41)99834-5311</h2>
          <h3>Curitiba - PR </h3>
          <h3>Pinheirinho - Rua La Salle, 300, Casa 3</h3>
          <h3>CEP: 81880-400</h3>
        </Contato>
      </Nav>
    </>
  );
}
