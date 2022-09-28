import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { EmoteList } from "../components";
import { useEmotes } from "../hooks";

const Home: NextPage = () => {
  const { emotes, loadEmotes } = useEmotes();
  useEffect(() => {
    loadEmotes();
  }, [loadEmotes]);
  return (
    <>
      <Head>
        <title>Kacky Emotes</title>
        <meta
          name="description"
          content="Page with all the emotes of Kacky Reloaded server"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={"https://kacky.info/static/media/logos/logo_2022.svg"}
        width={700}
        height={250}
        alt="This is the Kacky Logo"
      />
      <h1>EMOTES</h1>
      <EmoteList initialEmoteList={emotes} />
    </>
  );
};

export default Home;
