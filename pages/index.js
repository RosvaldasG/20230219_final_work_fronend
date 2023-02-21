import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import Button from "@/components/button/Button";
import axios from "axios";
import Router from "next/router";
import Maping from "@/components/mapping/Maping";

export default function Home({ questions }) {
  return (
    <>
      <Head>
        <title>10 MONTHS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar text={"MAKALAS"} />
        <div className={styles.buttonWraper}>
          <Button
            text={"Ask Question"}
            onClick={() => Router.push("/askQuestion/")}
          />
        </div>

        <div className={styles.infoBox}>
          {questions.map((question) => {
            return <Maping trip={question} />;
          })}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(contex) {
  // console.log("contex", contex);

  const response = await axios.get("http://localhost:3002/questions");
  // console.log(response.data.questions);
  return {
    props: {
      questions: response.data.questions,
    },
  };
}
