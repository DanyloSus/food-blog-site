import Layout from "@/components/layout/layout";
import "./globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Food Blog</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
