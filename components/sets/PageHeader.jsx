import { useState } from "react";
import MenuLink from "../items/MenuLink";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Logo from "../../public/images/Logo";

import Media from "react-media";

/*
Props:
- class
- place
- menu
- vert

*/

export default function PageHeader(props) {
  const router = useRouter();
  const [buttonMenu, setButtonMenu] = useState(false);

  const list = {
    animate: { transition: { staggerChildren: 0.05 } },
    exit: { transition: { staggerChildren: 0.05 } },
  };
  const animationMenu = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { staggerChildren: 1 } },
    exit: { opacity: 0, y: 30, transition: { staggerChildren: 1 } },
  };

  return (
    <>
      <Logo />

      <Media query="(min-width: 875px)">
        {(matches) => {
          {
            return matches ? (
              <>
                <motion.nav
                  initial={router.pathname === "/" && "initial"}
                  animate="animate"
                  exit={router.pathname === "/" && "exit"}
                  variants={list}
                  place={props.place}
                >
                  {props.menu.map((menuItem) => (
                    <motion.div key={menuItem.link} variants={animationMenu}>
                      <MenuLink
                        link={menuItem.link}
                        text={menuItem.text}
                        spam={menuItem.spam}
                        vert={props.vert}
                        className={
                          router.pathname.indexOf(menuItem.link)
                            ? null
                            : "active"
                        }
                      />
                    </motion.div>
                  ))}
                </motion.nav>
              </>
            ) : (
              <>
                <button
                  className="buttonMenu"
                  onClick={() => {
                    buttonMenu ? setButtonMenu(false) : setButtonMenu(true);
                  }}
                >
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="#F1F8F3"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.665 2.775H26.38M2.665 11.166H26.38M2.665 19.557H26.38"
                    />
                  </svg>
                </button>
                {buttonMenu && (
                  <div className="menuMobile">
                    <motion.div
                      className="backDrop"
                      onClick={() => {
                        setButtonMenu(false);
                      }}
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
                        <button
                          type="button"
                          onClick={() => {
                            setButtonMenu(false);
                          }}
                        >
                          X
                        </button>
                      </header>

                      <div className="modalContent"></div>
                    </motion.div>
                  </div>
                )}
              </>
            );
          }
        }}
      </Media>

      <style jsx global>{`
        nav {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 5rem;
          place-content: center;
          width: 100%;
          filter: drop-shadow(2px 3px 1px rgba(94, 36, 88, 0.55))
            drop-shadow(1px 10px 12px rgba(94, 36, 88, 0.45));
          align-items: center;
        }

        a:hover {
          line-height: 2;
        }

        a.active:after {
          content: "";
          width: 100%;
          height: 0.5rem;
          background: #ffc420;
          position: absolute;
          top: 5rem;
          border-radius: 2rem;
        }

        .buttonMenu {
          position: fixed;
          bottom: 10rem;
          width: 10rem;
          height: 10rem;
          padding: 2rem;
          border-radius: 100%;
          background: hsl(44deg 100% 56%);
          border: none;
          z-index: 100;
        }

        .buttonMenu svg {
          width: 100%;
          height: 100%;
          padding: 0.6rem 0.2rem;
        }

        .menuMobile {
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

        .menuMobile .backDrop {
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

        @media (max-height: 520px) {
          .buttonMenu {
            top: 4rem;
            right: 4rem;
          }

          .left {
            top: 25vh;
          }
        }

        @media (max-height: 610px) {
          .left {
            top: calc(25vh - 6rem);
          }
        }
      `}</style>
    </>
  );
}
