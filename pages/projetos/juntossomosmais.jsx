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

import Media from "react-media";

SwiperCore.use([Navigation]);

export default function JuntosSomosMais() {
  //Modal
  //Define qual modal deve aparecer
  //Ativa ou desativa o modal
  const [modal, setModalOpen] = useState(0);
  const [open, setOpen] = useState(false);

  const [projeto, setProjeto] = useState(0);

  let slidesView = 1;
  let slidesViewInside = 1;

  return (
    <>
      <div className="media">
        <Media query="(min-width: 320px)">
          {(matches) => {
            return (
              matches && (
                <>
                  {(slidesView = 1.3)} {(slidesViewInside = 1)}
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
                  {(slidesView = 1.7)} {(slidesViewInside = 1)}
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
                  {(slidesView = 3.2)} {(slidesViewInside = 2.2)}
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
                  {(slidesView = 3.6)} {(slidesViewInside = 2.8)}
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
                onClick={() => setProjeto(menuItem.key)}
              />
            ))}
          </div>
        </header>
        <Media query="(min-width: 280px)">
          {(matches) => {
            return (
              matches && (
                <>
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={slidesView}
                    navigation={true}
                  >
                    {vinteUm[projeto].eventos.map((jsm) => (
                      <SwiperSlide key={jsm.key} className="sliderCapa">
                        <Card
                          title={jsm.title}
                          span={jsm.span}
                          subtitle={jsm.subtitle}
                          imageTop={jsm.link}
                          objectFit="cover"
                          objectPosition="50% 150%"
                          cardonClick={() => (
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
                        span={vinteUm[projeto].eventos[modal].span}
                        subtitle={vinteUm[projeto].eventos[modal].subtitle}
                        slidesPerView={slidesViewInside}
                        images={vinteUm[projeto].eventos[modal].images}
                      />
                    )}
                  </AnimatePresence>
                </>
              )
            );
          }}
        </Media>
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
          background: hsl(44deg 100% 56%);
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
          margin-top: 1rem;
        }
      `}</style>

      <style jsx global>{`
        .media {
          display: none;
        }

        .jsm-projetos button {
          padding: 1.2rem 1.4rem .8rem;
          outline: 0.5rem solid hsl(0deg 0% 100% / 85%) !important;
        }

        main header .btn {
          font-size: 2rem !important;
          transition: 0.1s;
          margin-top: 2rem;
        }

        .card header .cardImage {
          filter: none;
        }

        .modal .modalContent .images {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }

        .modal .modalContent .images img {
          border-radius: 2rem;
        }

        .modal .modalCard .modalContent .swiper-slide {
          background: none !important;
          outline: none !important;
        }

        .swiper-slide,
        .swiper-wrapper {
          padding-right: clamp(3rem, 2vw, 5rem);
        }

        @media (max-width: 875px) {
          main .swiper {
            padding: 2rem 2rem 5rem;
          }

          main header .btn {
            font-size: 1.7rem !important;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
