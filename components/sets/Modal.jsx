import { motion } from "framer-motion";
import Title from "../items/Title";

/*
Props:
  Modal
    - onClick
  Header
    - title
    - span
    - subTitle
  Content
   - children
 */

export default function Modal(props) {
  return (
    <>
      <div className={"modal " + props.className}>
        <motion.div
          className="backDrop"
          onClick={props.onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          exit={{ opacity: 0 }}
        />
        <motion.div
          className="modalCard"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.1 }}
        >
          <header>
            <Title
              title={props.title}
              span={props.span}
              subtitle={props.subtitle}
            />
            <button type="button" onClick={props.onClick}>
              X
            </button>
          </header>

          <div className="modalContent">{props.children}</div>
        </motion.div>
      </div>
      <style jsx global>{`
        .modal {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 100;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
        }

        .backDrop {
          position: fixed;
          display: flex;
          flex-direction: column;
          place-items: center;
          place-content: center;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(15px);
          z-index: -1;
        }

        .modalCard {
          position: relative;
          top: 2vh;
          bottom: 2vh;
          display: flex;
          flex-direction: column;
          place-items: center;
          width: 90vw;
          padding: 4rem 0;
          border-radius: 2rem;
          background: #eee;
          text-align: center;
          text-shadow: none;
          text-transform: uppercase;
          box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
            0.1rem 0.2rem 0.5rem #5e2458;
        }

        .modalCard:after {
          content: "";
          position: absolute;
          width: 101%;
          height: 104%;
          background: hsl(44deg 100% 56%);
          z-index: -1;
          border-radius: 2rem;
          transform: rotateZ(0.1deg);
          box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
            0.1rem 0.2rem 0.5rem #5e2458;
          left: -1rem;
          top: -0.6rem;
        }

        .modal header {
          position: relative;
          display: flex;
          justify-content: space-between;
          width: inherit;
          text-align: center;
        }

        .modalCard header h1 {
          color: hsl(345deg 70% 50%) !important;
          margin: 0 !important;
        }

        .modal .modalCard header h1 span {
          color: hsl(195deg 80% 40%) !important;
        }

        .modal .subTitle {
          margin-top: 1rem;
          color: #000;
          text-shadow: none;
          max-width: 80vw;
        }

        .modalContent {
          margin-top: 3rem;
          width: 100%;
          overflow-y: auto;
          text-align: center;
        }

        .modalContent .images {
          position: relative;
          height: clamp(10rem, 90vh - 20vw, 38vh);
          margin: 0 auto 3rem;
          box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
            0.1rem 0.2rem 0.5rem #5e2458;
          border-radius: 2rem;
          outline: 0.3rem solid hsl(0deg 0% 100% / 41%);
        }

        .modalContent .images img {
          border-radius: 2rem;
        }

        .modalContent .images__subtitle {
          margin-top: 1rem;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          text-shadow: none;
          line-height: 2.8rem;
          color: #5e2458;
        }

        .modalContent h1 {
          text-transform: uppercase;
          font-size: 2.3rem;
          color: hsl(345deg 70% 50%);
          letter-spacing: -0.1rem;
        }

        .modalContent h2 {
          font-size: 2.3rem;
          font-weight: bold;
          letter-spacing: -0.1rem;
        }

        .modal .modalCard header button {
          position: absolute;
          top: -5rem;
          right: 0;
          cursor: pointer;
          background: linear-gradient(
            0deg,
            hsl(345deg 70% 50%),
            hsl(30deg 100% 60%)
          );
          border-radius: 100%;
          font-family: unset;
          text-align: unset;
          padding: 1.43rem 1.9rem 1rem;
          border: 0;
          outline: 1rem solid hsl(0deg 0% 100% / 100%);
          color: #fff;
          font-size: 3.8rem;
          font-weight: bold;
          box-shadow: 0.2rem 1rem 3rem rgb(94 36 88 / 45%),
            0.1rem 0.2rem 0.5rem #5e2458;
        }

        .modal .modalCard .modalContent .swiper {
          position: relative;
          padding: ${props.subtitle ? "0rem 0rem 0rem;" : "0rem 0rem 3.5rem;"};
          width: -webkit-fill-available;
          overflow: hidden !important;
        }

        .modal .modalCard .modalContent .swiper-slide {
          border-radius: 2rem;
          padding: 2rem 3rem 0rem;
          text-transform: uppercase;
        }

        @media (max-width: 875px) {

          .modal .modalCard {
            padding: 3rem 0 0;
          }
          .modal .modalCard h2 {
            font-size: clamp(9pt, 10vw / 2, 12pt);
          }

          .modalCard header h1 {
            font-size: 4rem !important;
          }

          .modal .modalCard .modalContent .swiper-slide,
          .modal .modalCard .modalContent .swiper-wrapper {
            padding-right: 0;
          }

          .modal .modalCard .modalContent .swiper-slide {
            padding: 0;
          }

          .modalContent .images {
            box-shadow: none;
          }

          .modalContent .images img {
            border-radius: 0;
          }
        }
      `}</style>
    </>
  );
}
