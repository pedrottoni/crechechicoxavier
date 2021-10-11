import Head from "next/head";
import Home from "../components/layout/Home";
import Title from "../components/items/Title";
import Links from "../components/sets/Links";
import menu from "../data/menu";
import Logo from "../public/images/Logo";

export default function Index() {
  return (
    <>
      <Head>
        <title>Creche Chico Xavier</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home>
        <header>
          <Logo />
          <Title
            title="Multiplicamos o amor"
            span="Através da educação"
          />
        </header>
        <Links menu={menu} image={true} />
      </Home>
      <style jsx global>{`
      `}</style>
    </>
  );
}
