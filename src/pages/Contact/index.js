import React from 'react';
import * as FA from 'react-icons/fa';
import * as AI from 'react-icons/ai';
import {
  TextContainer,
  PageContainer,
  Texto,
  Form,
  FormContainer,
} from './styled';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <>
      <PageContainer>
        <TextContainer>
          <h1>Fale Conosco</h1>

          <Texto>
            Se surgiu alguma dúvida e deseja conversar com um de nossos
            funcionários, você pode entrar com contato conosco ligando para
            nossos telefones de contato, enviando um e-mail ou preenchendo o
            formulário abaixo
          </Texto>
          <Texto>
            Nosso maior desejo é que você possa se beneficiar do uso de uma
            Energia de origem 100% sustentável, por isso estamos totalmente
            abertos a quaisquer perguntas e/ou questionamentos
          </Texto>

          <h1>Endereço</h1>

          <Texto>
            Curitiba - PR
            <br />
            Pinheirinho - Rua La Salle, 300, Casa 3
            <br />
            CEP: 81880400
          </Texto>

          <h1>Contato</h1>

          <Texto>
            <h3>Milton Sergio de Oliveira</h3>
            (41) 3298-3489
            <br />
            (41) 99834-5311
          </Texto>
          <Texto>
            <h3>Adelar</h3>
            (41) 3298-3489
            <br />
            (41) 99834-5311
          </Texto>
          <Texto>
            <h3>E-mail</h3>
            contato@ultrasolarbrasil.com.br
          </Texto>

          <h1>Siga-nos</h1>

          <Texto>
            <FA.FaFacebookF size={26} color="#061b3d" />
            <AI.AiOutlineInstagram size={32} color="#061b3d" />
            <AI.AiFillLinkedin size={32} color="#061b3d" />
          </Texto>
        </TextContainer>
        <FormContainer>
          <Form>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="input-nome">Nome</label>
            <input type="text" id="input-nome" name="fav_language" value="" />

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="input-email">E-mail</label>
            <input type="text" id="input-email" name="fav_language" value="" />

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="input-tel">Telefone</label>
            <input type="text" id="input-tel" name="fav_language" value="" />

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="input-titulo">Titulo da Mensagem</label>
            <input type="text" id="input-titulo" name="fav_language" value="" />

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="select-assunto">Assunto</label>
            <select if="select-assunto">
              <option value="laranja">Pedido de Orçamento</option>
              <option value="laranja">Sou um fornecedor</option>
              <option value="laranja">Quero ser um parceiro</option>
              <option value="laranja">Reclamação</option>
              <option value="laranja">Outro</option>
            </select>

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="input-nome">Mensagem</label>
            <input type="text" id="input-nome" name="fav_language" value="" />

            <button type="submit">Enviar</button>
          </Form>
        </FormContainer>
      </PageContainer>
      <Footer />
    </>
  );
}
