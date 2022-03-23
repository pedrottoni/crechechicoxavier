import { useState } from "react";
import Head from "next/head";

import Columns from "../components/layout/Columns";
import Title from "../components/items/Title";
import MenuButton from "../components/items/MenuButton";

import Image from "next/image";

export default function NossoSonho() {
  //Card
  //Define qual modal deve aparecer
  //Ativa ou desativa o modal
  const [cardNumber, setCardNumber] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const [projeto, setModal] = useState(0);

  return (
    <>
      <Head>
        <title>Creche Chico Xavier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Columns>
        <div className="left">
          <Title title="Junte-se ao" span="Nosso Sonho"></Title>
          <MenuButton
          a="https://paybox.doare.org/br/paybox?lang=br&currency=BRL&orgId=bb139c7e-aa35-11ec-96b8-06534163e0b3&campaignId=0a8dc4fc-aa37-11ec-96b8-06534163e0b3&values=&amount=&subscribe=0&newsletter=0&subscriptionAmount=&showSubscription=1&referer=https://www.crechechicoxavier.com.br/nossosonho"
          title="FAÇA SUA DOAÇÃO AGORA"
        />
        </div>
        <div className="right">
          <div className="cardImage">
            <Image
              src="/images/nosso sonho/turma.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </Columns>

      <style jsx>{``}</style>

      <style jsx global>{`
        main {
          flex-direction: row-reverse;
          min-height: 45vh;
        }

        main .left .subTitle,
        main .right .subtitle {
          max-width: 70rem;
        }

        main .left {
          font-size: 3rem;
          line-height: 4.2rem;
          color: #fff;
        }

        main .left h2 {
          font-family: "Lilita One", cursive;
          font-size: 5rem;
          font-weight: normal;
          letter-spacing: 0.1rem;
          color: #fff;
        }

        main .left b {
          letter-spacing: 0.1rem;
          color: hsl(44deg 100% 56%);
        }

        main .right {
          top: 4rem;
          width: -webkit-fill-available;
          height: auto;
        }

        .card {
          width: -webkit-fill-available;
        }

        .cardImage {
          position: relative;
          width: -webkit-fill-available;
          height: auto;
          margin: 0 auto 3rem;
          outline: 1rem solid #fff;
          border-radius: 2rem;
          box-shadow: 0.5rem 1.3rem 3rem -0.6rem hsl(356deg 70% 30% / 63%);
          transform: rotate(2deg);
        }

        .cardImage div {
          border-radius: 2rem;
        }

        .btn {
          width: 50rem;
        }

        @media (max-width: 875px) {
          .right {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
