import { useState } from "react";
import Head from "next/head";

import Center from "../components/layout/Center";
import Title from "../components/items/Title";
import Modal from "../components/sets/Modal";
import ModalSlide from "../components/sets/ModalSlide";
import ModalDataSlide from "../components/sets/ModalDataSlide";
import Card from "../components/sets/Card";
import { transparencia } from "../data/transparencia-dados";

import { motion, AnimatePresence } from "framer-motion";
import MenuButton from "../components/items/MenuButton";

import Media from "react-media";
import router from "next/router";

export default function Transparência() {
  // Animações dos Cards
  const list = {
    animate: { transition: { staggerChildren: 0.05 } },
    exit: { transition: { staggerChildren: 0.05 } },
  };
  const animationMenu = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { staggerChildren: 1 } },
    exit: { opacity: 0, y: 30, transition: { staggerChildren: 1 } },
  };

  //Modal
  //Define qual modal deve aparecer
  //Ativa ou desativa o modal
  const [modal, setModal] = useState(0);
  const [open, setOpen] = useState(false);

  var dados = [];

  transparencia[1].documentos.map((dado) => dados.push(dado.key));

  let slidesView = 1;
  let slidesViewInside = 1;
  open && modal === 2 && router.push("/anosanteriores");

  return (
    <>
      <div className="media">
        <Media query="(min-width: 320px)">
          {(matches) => {
            return (
              matches && (
                <>
                  {(slidesView = 1.8)} {(slidesViewInside = 1)}
                </>
              )
            );
          }}
        </Media>
        <Media query="(min-width: 425px)">
          {(matches) => {
            return (
              matches && (
                <>
                  {(slidesView = 2.2)} {(slidesViewInside = 1)}
                </>
              )
            );
          }}
        </Media>
        <Media query="(min-width: 768px)">
          {(matches) => {
            return (
              matches && (
                <>
                  {(slidesView = 3.2)} {(slidesViewInside = 3.1)}
                </>
              )
            );
          }}
        </Media>
        <Media query="(min-width: 875px)">
          {(matches) => {
            return (
              matches && (
                <>
                  {(slidesView = 4.2)} {(slidesViewInside = 4.1)}
                </>
              )
            );
          }}
        </Media>
      </div>
      <Head>
        <title>Creche Chico Xavier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <header>
          <Title title="Documentos e" span="Transparência" />
          <MenuButton
            title="Saiba Mais!"
            onClick={() => (
              <>
                {setOpen(true)}
                {setModal(3)}
              </>
            )}
          />
        </header>
        <motion.nav
          initial="initial"
          animate="animate"
          exit="exit"
          variants={list}
        >
          {transparencia.map((docs) => (
            <motion.div key={docs.key} variants={animationMenu}>
              <Card
                title={docs.title}
                span={docs.span}
                imageTop={docs.link}
                cardonClick={() => (
                  <>
                    {setOpen(true)}
                    {setModal(docs.key)}
                  </>
                )}
              />
            </motion.div>
          ))}
        </motion.nav>

        <Media query="(min-width: 280px)">
          {(matches) => {
            return (
              matches && (
                <>
                  <AnimatePresence initial={false}>
                    {open && modal === 0 && (
                      <ModalSlide
                        onClick={() => setOpen(false)}
                        title={transparencia[modal].title}
                        span={transparencia[modal].span}
                        slidesPerView={slidesViewInside}
                        images={transparencia[modal].documentos}
                        link={true}
                      />
                    )}
                    {open && modal === 1 && (
                      <ModalDataSlide
                        onClick={() => setOpen(false)}
                        title={transparencia[modal].title}
                        span={transparencia[modal].span}
                        slidesPerView={slidesViewInside}
                        images={transparencia[modal].documentos}
                        dados={dados}
                        inicial={0}
                        link={true}
                      />
                    )}

                    {open && modal === 3 && (
                      <Modal
                        title="Transparência"
                        className="modal-title"
                        onClick={() => setOpen(false)}
                      >
                        <hr />
                        <br />
                        <br />
                        <br />
                        <p>
                          "A Casa da Criança Creche Chico Xavier tem também como
                          objetivo, atuar de forma transparente e atender a
                          legislação da Transparência Municipal e atender o
                          Termo de Colaboração Nº001. Desta forma, a instituição
                          vem através desta página, disponibilizar publicamente
                          o acesso as suas prestações de contas."
                        </p>
                      </Modal>
                    )}
                  </AnimatePresence>
                </>
              )
            );
          }}
        </Media>
      </Center>
      <style jsx global>{`
        main header .btn {
          margin-top: 1.4rem;
          background: hsl(208deg 70% 48%);
          border: none;
          font-size: 2rem !important;
          transition: 0.1s;
        }

        .modalCard {
          width: clamp(320px, 90vw, 150rem) !important;
        }

        .modalContent .images {
          position: relative;
          width: 17rem !important;
          height: 19rem !important;
        }

        .modalContent .images div {
          width: 15rem;
          height: 16rem;
          top: 9% !important;
          left: 9% !important;
        }

        .modalContent p {
          font-size: 2.5rem;
          text-transform: initial;
          text-align: left;
        }

        main .modal .modalCard.modal-title {
          padding: 3rem !important;
        }

        .modal-title .modalCard {
          width: clamp(320px, 50vw, 90rem) !important;
        }

        .modal-title .modalCard header h1 {
          color: hsl(195deg 80% 40%) !important;
        }

        .modal .modalCard button {
          background-color: hsl(345deg 70% 50%);
          margin-top: 0;
        }

        .modal .modalCard .modalContent .swiper-slide {
          padding: 2rem 0 0 !important;
        }

        header .btn {
          width: 20rem !important;
          padding: 1.2rem 1.4rem 0.8rem;
          outline: 0.5rem solid hsl(0deg 0% 100% / 85%) !important;
        }

        @media (max-width: 875px) {
          main .modal .modalCard {
            padding: 3rem 0rem 0 !important;
          }
        }
      `}</style>
    </>
  );
}
