import { useState } from "react";
import Head from "next/head";

import Center from "../../components/layout/Center";
import Title from "../../components/items/Title";
import MenuButton from "../../components/items/MenuButton";
import Card from "../../components/sets/Card";
import ModalSlide from "../../components/sets/ModalSlide";
import { vinteUm } from "../../data/projetos-jsm";

import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export default function JuntosSomosMais() {
  //Modal
  //Define qual modal deve aparecer
  //Ativa ou desativa o modal
  const [modal, setModalOpen] = useState(0);
  const [open, setOpen] = useState(false);

  const [projeto, setProjeto] = useState(0);

  return (
    <>
      <Head>
        <title>Creche Chico Xavier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <header>
          <Title title="Juntos" span="Somos Mais" />
          <div className="jsm-projetos">
            {vinteUm.map((menuItem) => (
              <MenuButton
                key={menuItem.key}
                link={menuItem.link}
                title={menuItem.title}
                image={menuItem.image}
                vert={menuItem.vert}
                span={menuItem.span}
                onCLick={() => setProjeto(menuItem.key)}
              />
            ))}
          </div>
        </header>
        <Swiper spaceBetween={50} slidesPerView={4.4} navigation={true}>
          {vinteUm[projeto].eventos.map((jsm) => (
            <SwiperSlide key={jsm.key}>
              <Card
                title={jsm.title}
                subtitle={jsm.subtitle}
                imageTop={jsm.link}
                cardOnCLick={() => (
                  <>
                    {setOpen(true)}
                    {setModalOpen(jsm.key)}
                  </>
                )}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <AnimatePresence initial={false}>
          {open && (
            <ModalSlide
              key={vinteUm[projeto].eventos[modal].key}
              onClick={() => setOpen(false)}
              title={vinteUm[projeto].eventos[modal].title}
              subtitle={vinteUm[projeto].eventos[modal].subtitle}
              images={vinteUm[projeto].eventos[modal].images}
            />
          )}
        </AnimatePresence>
      </Center>

      <style jsx>{`
        main nav {
          width: 100vw;
          overflow-y: hidden;
          overflow-x: auto;
          padding: 4rem 2rem 5rem 2rem;
          margin-bottom: -5rem;
          gap: 0;
        }

        main nav .card {
          background: #ffc420;
        }

        .card::after {
          background: #fff;
        }

        .images {
          position: relative;
          width: 40rem;
          height: 40rem;
        }

        .jsm-projetos {
          display: flex;
          gap: 2rem;
        }
      `}</style>

      <style jsx global>{`
        main .swiper {
          position: relative;
          width: 100vw;
          margin: 0;
          padding: 3rem 5rem 5rem;
        }

        main .swiper-slide {
        }
      `}</style>
    </>
  );
}
