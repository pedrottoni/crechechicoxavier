import Image from "next/image";

export const nossoSonho = [
  {
    key: 0,
    link: "nosso sonho/junte-se ao nosso sonho",
    title: "Faça sua",
    span: "Doação",
    documentos: (
      <>
        <div className="cardInfo">
          <div className="cardImage">
            <Image
              src="/images/nosso sonho/turma.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2>SANTANDER</h2>
          <b>CONTA:</b> 13.001644-7
          <br />
          <b>AGÊNCIA:</b> 0053
          <br />
          <b>CNPJ:</b> 48.554.190/0001-15
          <br />
          <b>PIX:</b> 48.554.190/0001-15
          <br />
          <h2>CAIXA</h2>
          <b>PIX</b>: 12 9 8137-7272
          <br />
        </div>
      </>
    ),
  },
  /*
  {
    key: 1,
    link: "transparência/fundamentação legal",
    title: "Galeria",
    documentos: [
      {
        key: 0,
        link: "nosso sonho/junte-se ao nosso sonho",
        title: "Videos",
        dados: [],
    },
    {
        key: 0,
        link: "nosso sonho/junte-se ao nosso sonho",
        title: "Fotos",
        dados: [],
      },
    ],
  },
  */
];
