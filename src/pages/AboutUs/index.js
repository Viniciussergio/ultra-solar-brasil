import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as FaIcons from 'react-icons/fa';
import Footer from '../../components/Footer';
import * as styled from './styled';
import profileTemplate from '../../config/images/profile-template.png';

export default function AboutUs() {
  return (
    <>
      <styled.MainWallpaper>
        <styled.WallpaperButton>
          Saiba Mais
          <RiIcons.RiArrowDownSFill />
        </styled.WallpaperButton>
      </styled.MainWallpaper>
      <styled.PageContainer>
        <styled.Intro>
          <styled.TextContainer>
            <div>
              <h1>A Ultra Solar Brasil</h1>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha
                terra sou euzis!Praesent vel viverra nisi. Mauris aliquet nunc
                non turpis scelerisque, eget.Não sou faixa preta cumpadi, sou
                preto inteiris, inteiris.Suco de cevadiss, é um leite divinis,
                qui tem lupuliz, matis, aguis e fermentis.
              </p>
              <p>
                Sapien in monti palavris qui num significa nadis i pareci
                latim.Mais vale um bebadis conhecidiss, que um alcoolatra
                anonimis.Manduma pindureta quium dia nois paga.Interessantiss
                quisso pudia ce receita de bolis, mais bolis eu num gostis.
              </p>
              <p>
                Viva Forevis aptent taciti sociosqu ad litora torquent.Cevadis
                im ampola pa arma uma pindureta.Mauris nec dolor in eros commodo
                tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Detraxit
                consequat et quo num tendi nada.
              </p>
              <p>
                Aenean aliquam molestie leo, vitae iaculis nisl.Vehicula non. Ut
                sed ex eros. Vivamus sit amet nibh non tellus tristique
                interdum.Viva Forevis aptent taciti sociosqu ad litora
                torquent.Sapien in monti palavris qui num significa nadis i
                pareci latim.
              </p>
            </div>
          </styled.TextContainer>
          <styled.ImageContainer>
            <div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
              <div>a</div>
            </div>
          </styled.ImageContainer>
        </styled.Intro>
      </styled.PageContainer>
      <styled.PageContainer>
        <styled.Leaders>
          <h1>Nossos Líderes</h1>
          <div>
            <styled.PersonContainer>
              <img src={profileTemplate} alt="Foto de Milton Sergio" />
              <h1>MILTON SERGIO</h1>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé,
                boa gentis num é.Interagi no mé, cursus quis, vehicula ac
                nisi.Todo mundo vê os porris que eu tomo, mas ninguém vê os
                tombis que eu levo!Atirei o pau no gatis, per gatis num morreus.
                Copo furadis é disculpa de bebadis, arcu quam euismod
                magna.Aenean aliquam molestie leo, vitae iaculis nisl.Não sou
                faixa preta cumpadi, sou preto inteiris, inteiris.Em pé sem
                cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
                Delegadis gente finis, bibendum egestas augue arcu ut est.Suco
                de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
                fermentis.Posuere libero varius.
              </p>
            </styled.PersonContainer>
            <styled.PersonContainer>
              <img src={profileTemplate} alt="Foto de Adelar Silva Sauro" />
              <h1>ADELAR SILVA SAURO</h1>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé,
                boa gentis num é.Interagi no mé, cursus quis, vehicula ac
                nisi.Todo mundo vê os porris que eu tomo, mas ninguém vê os
                tombis que eu levo!Atirei o pau no gatis, per gatis num morreus.
                Copo furadis é disculpa de bebadis, arcu quam euismod
                magna.Aenean aliquam molestie leo, vitae iaculis nisl.Não sou
                faixa preta cumpadi, sou preto inteiris, inteiris.Em pé sem
                cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
                Delegadis gente finis, bibendum egestas augue arcu ut est.Suco
                de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
                fermentis.Posuere libero varius.
              </p>
            </styled.PersonContainer>
          </div>
        </styled.Leaders>
      </styled.PageContainer>
      <styled.PageContainer>
        <styled.Mission>
          <div>
            <div>
              <h1>Nossa Missão</h1>
              <p>
                Estar entre as 5 maiores empresas do país em equipamentos
                vendidos, e ser reconhecida pela qualidade de seus produtos e
                serviços.
              </p>
            </div>
            <div>
              <h1>Nossa Visão</h1>
              <p>
                Produzir, comercializar e distribuir equipamentos de alta
                qualidade e confiabilidade para empresas e indústrias, gerando
                um crescimento sustentável para a empresa e a satisfação de
                todas as partes interessadas no negócio.
              </p>
            </div>
            <div>
              <h1>Nossos Valores</h1>
              <p>
                Foco do Cliente, Transparência; Ética, Comprometimento,
                Excelência na Gestão, Criatividade; Aprendizado Contínuo,
                Valorização e Respeito aos Colaboradores, Integração,
                Responsabilidade Ambiental.
              </p>
            </div>
          </div>
          <styled.VideoContainer>
            <div>
              <FaIcons.FaPlay size={32} />
            </div>
          </styled.VideoContainer>
        </styled.Mission>
      </styled.PageContainer>
      <Footer />
    </>
  );
}
