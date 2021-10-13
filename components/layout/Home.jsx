import Social from "../sets/Social";

export default function Home(props) {
  return (
    <>
      {props.children}
      <Social />

      <style jsx global>{`
        #__next {
          display: flex;
          place-items: center;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          height: 100vh;
          text-shadow: 0.2rem 0.3rem 0rem hsl(195deg 75% 30%),
            0.1rem 0.2rem 0.3rem hsl(195deg 0% 0%);
        }

        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 0 8rem;
        }

        header svg {
          position: relative;
          top: -0.5rem;
          width: 47rem;
          height: 24rem;
          filter: drop-shadow(2px 3px 1px rgba(94, 36, 88, 0.55))
            drop-shadow(1px 2px 10px rgba(94, 36, 88, 0.25));
          display: flex;
        }

        nav {
          gap: 8rem;
        }

        .linkIcon {
          width: 17rem !important;
          height: 14rem !important;
        }

        footer {
          margin: 12rem 0 0;
        }
      `}</style>
    </>
  );
}
