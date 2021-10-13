import Image from "next/image";

export default function Background(props) {
  return (
    <div className="background">
      <div className="color" />
      <div className="sky">
        <Image src="/images/sky.svg" layout="fill" objectFit="fill" alt=""/>
      </div>
      <div className="hills">
        <Image src="/images/hills.svg" layout="fill" objectFit="fill" alt=""/>
      </div>
      <style jsx>{`
        .background {
          position: fixed;
          z-index: -10;
          width: 100vw;
          height: 100vh;
        }

        .background .color {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(
            90% 100% at 50% 30%,
            hsl(205deg 75% 50%) 0%,
            hsl(215deg 80% 45%) 100%
          );
          transition: 1s;
        }

        .background .sky {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 18vw;
          transition: 0.5s;
        }

        .background .hills {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100vw;
          height: 15vw;
          transform: scale(1.01);
          filter: brightness(1) hue-rotate(0deg);
          transition: 0.5s;
        }
      `}</style>
    </div>
  );
}
