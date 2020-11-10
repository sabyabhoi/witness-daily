import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Main page</title>
      </Head>
      <Header />
      <main>Hello there</main>
    </div>
  );
}
