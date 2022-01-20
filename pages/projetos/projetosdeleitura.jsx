import { useState } from "react";
import Head from "next/head";

import Center from "../../components/layout/Center";
import Title from "../../components/items/Title";
import Card from "../../components/sets/Card";
import ModalDataSlide from "../../components/sets/ModalDataSlide";
import { vinteUm } from "../../data/projetos-leitura";

import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Media from "react-media";

SwiperCore.use([Navigation]);

var data = new Date();
var mes = Number(data.getMonth());
var meses = [
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export default function ProjetosDeLeitura() {
  //Modal
  //Define qual modal deve aparecer
  //Ativa ou desativa o modal
  const [modal, setModalOpen] = useState(0);
  const [open, setOpen] = useState(false);

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
                  {(slidesView = 3.2)} {(slidesViewInside = 2.2)}
                </>
              )
            );
          }}
        </Media>
        <Media query="(min-width: 875px)">
          {(matches) => {
            return matches && ( <>
              {(slidesView = 4.2)} {(slidesViewInside = 2.8)}
            </>);
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
          <Title title="Projetos" span="de Leitura" />
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
                    {vinteUm.map((projeto) => (
                      <SwiperSlide key={projeto.key}>
                        <Card
                          title={projeto.title}
                          span={projeto.span}
                          subtitle={projeto.subtitle}
                          imageTop={projeto.link}
                          objectFit="cover"
                          objectPosition="50% 40%"
                          cardonClick={() => (
                            <>
                              {setOpen(true)}
                              {setModalOpen(projeto.key)}
                            </>
                          )}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <AnimatePresence initial={false}>
                    {open && (
                      <ModalDataSlide
                        onClick={() => setOpen(false)}
                        title={vinteUm[modal].title}
                        subtitle={vinteUm[modal].subtitle}
                        slidesPerView={slidesViewInside}
                        images={vinteUm[modal]}
                        dados={meses}
                        inicial={mes - 2 <= 0 ? 11 : mes - 2}
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
        main .card {
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
      `}</style>

      <style jsx global>{`


      `}</style>
    </>
  );
}
