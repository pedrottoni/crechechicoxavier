import { useState } from "react";
import Image from "next/image";

export default function Card(props) {
	const [modal1, setModal1Open] = useState(false);
	return (
		<>
			<style jsx>{``}</style>
		</>
	);
}

/* <Modal
image="coverLogoBook01"
color={Colors.smartBlue}
shadow={Colors.smartBlueDark}
onClick={() => (modalBook1 ? setModalBook1Open(false) : setModalBook1Open(true))}> */

/* <div className="modal">
      <motion.div className="backDrop" onClick={props.onClick} initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} exit={{ opacity: 0 }} />
      <motion.div className="modalFundo" initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: 1, scale: 1}} exit={{ opacity: 0, scale: 0.2 }} transition={{duration: 0.1}}>
        <div className="modalCard">
          <header>
            {props.image ? (
              <div className="modalImage">
                <Image src={"/images/" + props.image + ".svg"} alt={props.modalImage} layout="fill" />
              </div>
            ) : null}
            {props.title ? <h3>{props.title}</h3> : null}
            <button type="button" onClick={props.onClick}>
              X
            </button>
          </header>
          <div className="modalContent">{props.children}</div>
        </div>
      </motion.div>
      <style jsx global>{`
        .modal {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
          z-index: 3;
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
        }

        .modalFundo {
          position: fixed;
          display: flex;
          flex-direction: column;
          background: ${props.color};
          box-shadow: -0.6rem 0.6rem ${props.shadow};
          padding: 0.8rem;
          width: min(80rem, 98vw);
          min-width: 16rem;
          height: fit-content;
          border-radius: 3rem;
          place-self: center;
          transition: 0.4s;
        }

        .modalCard {
          display: flex;
          flex-direction: column;
          place-items: center;
          width: 100%;
          max-height: 95vh;
          padding: clamp(1rem, 2vw, 2rem);
          border-radius: 3rem;
          background: #fff;
          box-shadow: ${props.fundo ? "inset -3px -5px 7px 5px #d9d9d9, inset 6px 6px 7px 3px #fff" : "none"};
          text-align: center;
        }

        .modalImage {
          position: relative;
          margin-bottom: 2rem;
          height: 40vh;
          width: 100%;
        }

        .modal header {
          position: relative;
          top: -2.1rem;
          display: flex;
          justify-content: space-between;
          align-items: start;
          width: min(79rem, 98vw);
          padding: 3rem 2rem 5rem;
          background: ${props.color};
          border-radius: 3rem 3rem 0 0;
          color: ${props.headerColor};
          text-align: left;
          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);
        }

        .modalContent {
          max-height: 60vh;
          width: 100%;
          text-align: left;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}
 */
