import Image from "next/image";

export default function Columns(props) {
  return (
    <>
      <Image
        src="/images/logo.svg"
        alt="Picture of the author"
        width="500"
        height="500"
        layout="responsive"
      />
    </>
  );
}
