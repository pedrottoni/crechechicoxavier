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

  return (
    <>
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

        <AnimatePresence initial={false}>
          {open && modal === 0 && (
            <ModalSlide
              onClick={() => setOpen(false)}
              title={transparencia[modal].title}
              span={transparencia[modal].span}
              slidesPerView={4.2}
              images={transparencia[modal].documentos}
              link={true}
            />
          )}
          {open && modal === 1 && (
            <ModalDataSlide
              onClick={() => setOpen(false)}
              title={transparencia[modal].title}
              span={transparencia[modal].span}
              slidesPerView={4.2}
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
                "A Casa da Criança Creche Chico Xavier tem também como objetivo,
                atuar de forma transparente e atender a legislação da
                Transparência Municipal e atender o Termo de Colaboração Nº001.
                Desta forma, a instituição vem através desta página,
                disponibilizar publicamente o acesso as suas prestações de
                contas."
              </p>
            </Modal>
          )}
        </AnimatePresence>
      </Center>
      <style jsx global>{`
        main header .btn {
          margin-top: 1.4rem;
          background: hsl(208deg 70% 48%);
          border: none;
          font-size: 2rem !important;
          transition: 0.1s;
        }

        .modalContent .images {
          position: relative;
          width: 17rem !important;
          height: 19rem !important;
          margin: 0 auto 2rem !important;
        }

        .modalContent p {
          font-size: 2.5rem;
          text-transform: initial;
          text-align: left;
        }

        .modal-title .modalCard {
          width: 90rem;
        }

        .modal-title .modalCard header h1 {
          color: #148fb8 !important;
        }

        .modal .modalCard button {
          background-color: hsl(345deg 70% 50%);
          margin-top: 0;
        }
      `}</style>
    </>
  );
}
