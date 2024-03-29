import { useState } from "react";
import Head from "next/head";
import Columns from "../components/layout/Columns";
import Title from "../components/items/Title";
import Buttons from "../components/sets/Buttons";
import Card from "../components/sets/Card";
import CardSlideData from "../components/sets/CardSlideData";
import { imagens } from "../data/aCreche-image";
import Modal from "../components/sets/Modal";
import ModalDataSlide from "../components/sets/ModalDataSlide";

import Media from "react-media";

export default function Acreche() {
  const [historia, sethistoria] = useState(true);
  const [missao, setMissao] = useState(false);
  const [equipe, setEquipe] = useState(false);
  const [equipeColaboradores, setEquipeColaboradores] = useState(false);

  var dados = [];

  imagens.map((dado) => dados.push(dado.key));

  const stateBtn = [
    {
      key: 1,
      link: "história",
      title: "Nossa",
      span: "História",
      onClick: () => {
        sethistoria(true);
        setMissao(false);
        setEquipe(false);
        setEquipeColaboradores(false);
      },
    },
    {
      key: 2,
      link: "estrutura",
      title: "Nossa",
      span: "Missão",
      onClick: () => {
        sethistoria(false);
        setMissao(true);
        setEquipe(false);
        setEquipeColaboradores(false);
      },
    },
    {
      key: 3,
      link: "equipe",
      title: "Nossa",
      span: "Equipe",
      onClick: () => {
        sethistoria(false);
        setMissao(false);
        setEquipe(true);
        setEquipeColaboradores(false);
      },
    },
  ];

  return (
    <>
      <Media
        query="(min-width: 875px)"
        onChange={(matches) => {
          return matches ? (
            <>
              {historia === false && missao === false && equipe === false
                ? sethistoria(true)
                : null}
            </>
          ) : (
            <>{sethistoria(false)}</>
          );
        }}
      />

      <Head>
        <title>Creche Chico Xavier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Columns>
        <div className="left">
          <Title
            title="A nossa creche"
            span="Chico Xavier"
            subtitle="Há quatro décadas acolhemos crianças e suas famílias, colaborando para a construção de vidas mais felizes."
          >
            <Buttons
              menu={stateBtn}
              image={true}
              vert={true}
              place="start"
              class="stateBtn"
            />
          </Title>
        </div>

        <Media query="(min-width: 875px)">
          {(matches) => {
            return matches ? (
              <div className="right">
                {historia ? (
                  <Card title="Nossa História" icon="história">
                    <p>
                      A Creche Chico Xavier atende 106 crianças e
                      aproximadamente 100 famílias em período integral. Para
                      atender os objetivos dos Projetos Pedagógicos e
                      Socioeducativos a que se propõe.
                    </p>
                    <br />
                    <p>
                      Tem como objetivo desenvolver suas atividades pautadas no
                      respeito à heterogeneidade dos arranjos familiares, aos
                      valores, às crenças e às identidades das famílias.
                      Fundamenta-se no fortalecimento da cultura do diálogo, no
                      exercício da cidadania, no combate a todas as formas de
                      violência, de preconceito, de discriminação e de
                      estigmatização.
                    </p>
                    <br />
                    <p>
                      Para fortalecer os vínculos familiares e comunitários e a
                      construção de uma vida autônoma e saudável para a criança
                      e sua família, a nossa creche baseia seu trabalho nas
                      culturas plurais. Para isso, dialogamos com a diversidade
                      das famílias e da comunidade, trabalhando junto dos
                      responsáveis pelas crianças na conscientização de cada um
                      deles sobre seu papel no desenvolvimento sustentável tanto
                      de seu núcleo familiar quanto da própria instituição.
                    </p>
                  </Card>
                ) : null}
                {missao ? (
                  <Card title="Nossa Missão" icon="estrutura">
                    <p>
                      Inaugurada em 1981, a Casa da Criança - Creche Chico
                      Xavier tem como missão a promoção da educação, assistência
                      social e cultura, o amparo e proteção da comunidade e o
                      desenvolvimento integral da criança, em seus aspectos
                      físico, psicológico, intelectual e social. É uma
                      associação sem fins lucrativos ou econômicos,
                      político-partidários ou religiosos com o objetivo de
                      priorizar e cumprir duas funções complementares: cuidar e
                      educar.
                    </p>
                  </Card>
                ) : null}
                {equipe ? (
                  <CardSlideData
                    title="Nossa Equipe"
                    icon="equipe"
                    images={imagens}
                    dados={dados}
                    inicial={0}
                  />
                ) : null}
                {equipeColaboradores ? (
                  <Card
                    title="Nossa Equipe"
                    span="Colaboradores"
                    onClickLeftA={() => {
                      setEquipeColaboradores(false);
                      setEquipe(true);
                    }}
                    onClickRightA={() => {
                      setEquipeColaboradores(false);
                      setEquipe(true);
                    }}
                    icon="equipe"
                  ></Card>
                ) : null}
              </div>
            ) : (
              <div className="right">
                {historia && (
                  <Modal
                    title="Nossa História"
                    className="modal-title"
                    onClick={() => (
                      <>
                        {sethistoria(false)}
                        {setMissao(false)}
                        {setEquipe(false)}
                        {setEquipeColaboradores(false)}
                      </>
                    )}
                  >
                    <hr />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>
                      A Creche Chico Xavier atende 106 crianças e
                      aproximadamente 100 famílias em período integral. Para
                      atender os objetivos dos Projetos Pedagógicos e
                      Socioeducativos a que se propõe.
                    </p>
                    <br />
                    <p>
                      Tem como objetivo desenvolver suas atividades pautadas no
                      respeito à heterogeneidade dos arranjos familiares, aos
                      valores, às crenças e às identidades das famílias.
                      Fundamenta-se no fortalecimento da cultura do diálogo, no
                      exercício da cidadania, no combate a todas as formas de
                      violência, de preconceito, de discriminação e de
                      estigmatização.
                    </p>
                    <br />
                    <p>
                      Para fortalecer os vínculos familiares e comunitários e a
                      construção de uma vida autônoma e saudável para a criança
                      e sua família, a nossa creche baseia seu trabalho nas
                      culturas plurais. Para isso, dialogamos com a diversidade
                      das famílias e da comunidade, trabalhando junto dos
                      responsáveis pelas crianças na conscientização de cada um
                      deles sobre seu papel no desenvolvimento sustentável tanto
                      de seu núcleo familiar quanto da própria instituição.
                    </p>
                  </Modal>
                )}
                {missao && (
                  <Modal
                    title="Nossa Missão"
                    className="modal-title"
                    onClick={() => (
                      <>
                        {sethistoria(false)}
                        {setMissao(false)}
                        {setEquipe(false)}
                        {setEquipeColaboradores(false)}
                      </>
                    )}
                  >
                    <hr />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>
                      Inaugurada em 1981, a Casa da Criança - Creche Chico
                      Xavier tem como missão a promoção da educação, assistência
                      social e cultura, o amparo e proteção da comunidade e o
                      desenvolvimento integral da criança, em seus aspectos
                      físico, psicológico, intelectual e social. É uma
                      associação sem fins lucrativos ou econômicos,
                      político-partidários ou religiosos com o objetivo de
                      priorizar e cumprir duas funções complementares: cuidar e
                      educar.
                    </p>
                  </Modal>
                )}
                {equipe && (
                  <ModalDataSlide
                    title="Nossa Equipe"
                    images={imagens}
                    slidesPerView={1}
                    dados={dados}
                    inicial={0}
                    onClick={() => (
                      <>
                        {sethistoria(false)}
                        {setMissao(false)}
                        {setEquipe(false)}
                        {setEquipeColaboradores(false)}
                      </>
                    )}
                  />
                )}
                {equipeColaboradores && (
                  <ModalDataSlide
                    title="Nossa Equipe"
                    span="Colaboradores"
                    slidesPerView={1}
                    onClick={() => (
                      <>
                        {sethistoria(false)}
                        {setMissao(false)}
                        {setEquipe(false)}
                        {setEquipeColaboradores(false)}
                      </>
                    )}
                    icon="equipe"
                  />
                )}
              </div>
            );
          }}
        </Media>
      </Columns>
      <style jsx>{``}</style>
      <style jsx global>{`
        .background .color {
          //filter: brightness(0.4) hue-rotate(64deg) contrast(1.4) saturate(1.4);
        }

        .background .hills {
          //filter: brightness(0.5) hue-rotate(50deg) !important;
        }

        .left .subTitle,
        .right .subtitle {
          max-width: 70rem;
        }

        .cardBtn {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }

        .cardImage {
          position: relative;
          width: 20vw;
          height: 28rem;
          margin: 1rem auto 2rem;
          outline: 1rem solid #fff;
          border-radius: 2rem;
          -webkit-transform: rotateZ(1deg);
          -ms-transform: rotateZ(1deg);
          transform: rotateZ(6deg);
          box-shadow: 0.1rem 0.3rem 5rem -0.6rem hsl(356deg 70% 30% / 63%);
        }

        .cardImage img {
          border-radius: 2rem;
        }
      `}</style>
    </>
  );
}
