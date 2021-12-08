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
          top: 0;
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
          display: flex;
          flex-direction: column;
          place-items: center;
          width: 90vw;
          max-height: 90vh;
          padding: 4rem;
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
          color: #148fb8 !important;
        }

        .modal .subTitle {
          margin-top: 1rem;
          color: #000;
          text-shadow: none;
          max-width: 80vw;
        }

        .modal header button {
          position: absolute;
          right: 4rem;
        }

        .modalContent {
          margin-top: 3rem;
          width: 100%;
          overflow-y: auto;
          text-align: center;
        }

        .modalContent .images {
          position: relative;
          height: 58vh;
          margin: 0 auto 3rem;
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

        .modal .modalCard .modalContent .swiper {
          position: relative;
          margin: 0;
          padding: 0;
          width: -webkit-fill-available;
        }

        .modal .modalCard .modalContent .swiper-slide {
          border-radius: 2rem;
          padding: 2rem 0rem;
          text-transform: uppercase;
        }

        @media (max-width: 875px) {
          .modal .modalCard h2 {
            font-size: clamp(9pt, 10vw / 2, 12pt);
          }

          .modalCard header h1 {
            font-size: 4rem !important;
          }
        }
      `}</style>
    </>
  );
}
