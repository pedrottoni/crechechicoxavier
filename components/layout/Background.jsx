import Image from "next/image";

export default function Background(props) {
  return (
    <>
      <div className="bg">
        <div className="sky">
          <Image src="/images/sky.svg" layout="fill" objectFit="fill" />
        </div>
        <div className="hills">
          <Image src="/images/hills.svg" layout="fill" objectFit="fill" />
        </div>
      </div>
      <style jsx>{`
        .bg {
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(
            85% 85% at 50% 58%,
            hsl(195deg 80% 50%) 0%,
            hsl(195deg 80% 40%) 100%
          );
          transition: 1s;
        }

        .bg .sky {
          position: fixed;
          top: 0;
          width: 100vw;
          height: 18vw;
          transition: 0.5s;
        }

        .bg .hills {
          position: fixed;
          bottom: 0;
          width: 100vw;
          height: 15vw;
          transform: scale(1.01);
          filter: brightness(1) hue-rotate(0deg);
          transition: 0.5s;
        }
      `}</style>
    </>
  );
}
