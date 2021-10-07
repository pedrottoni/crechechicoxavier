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
          text-shadow: 0 0.2rem 0 hsl(195deg 75% 30%),
            0 0.3rem 0.4rem hsl(195deg 75% 30%);
        }

        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 0 8rem;
        }

        header svg {
          width: 50rem;
          height: 24rem;
          filter: drop-shadow(0px 6px 5px hsl(306deg 45% 25% / 20%));
          display: flex;
        }

        footer {
          margin: 12rem 0 0;
        }
      `}</style>
    </>
  );
}
