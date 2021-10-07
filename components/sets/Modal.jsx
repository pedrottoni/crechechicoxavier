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
          z-index: 1;
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
          display: flex;
          flex-direction: column;
          place-items: center;
          width: 130rem;
          max-height: 95vh;
          padding: 4rem;
          border-radius: 2rem;
          background: #fff;
          text-align: center;
          text-shadow: none;
          text-transform: uppercase;
        }

        .modal header {
          position: relative;
          display: flex;
          justify-content: space-between;
          width: inherit;
          text-align: center;
        }

        .modalCard header h1 {
          color: #db3541 !important;
        }

        .modal .modalCard header h1 span {
          color: #148fb8 !important;
        }

        .modal .subTitle {
          color: #000;
          text-shadow: none;
        }

        .modal header button {
          position: absolute;
          right: 4rem;
          color: #fff;
          font-size: 2.5rem;
          font-weight: bold;
        }

        .modalContent {
          max-height: 60vh;
          width: 100%;
          overflow-y: auto;
          text-align: center;
        }

        .modalContent .images {
          position: relative;
          width: 30rem;
          height: 30rem;
          margin: 0 auto 3rem;
        }

        .modalContent .images__subtitle {
          margin-top: 1.8rem;
          font-size: 2rem;
          text-align: center;
          text-shadow: none;
          line-height: 2.8rem;
        }

        .modalContent h1 {
          text-transform: uppercase;
          font-size: 2.3rem;
          color: #db3541;
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
          background: #eee;
          border-radius: 2rem;
          padding: 2rem 0;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
}
