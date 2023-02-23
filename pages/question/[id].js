import React from "react";
import axios from "axios";
import Navbar from "@/components/navbar/Navbar";
import styles from "../question/question.module.css";
import Button from "@/components/button/Button";
import { useState } from "react";
import Router from "next/router";
import AnswerList from "@/components/answerList/AnswerList";
import TextInput from "@/components/textInput/TextInput";
import BackButton from "@/components/backButton/BackButton";

const Id = ({ answers, question, id }) => {
  const [answerText, setAnswerText] = useState();

  const onClickHandler = async () => {
    const answerData = {
      answerText: answerText,
      // userId: question.userId,
      questionId: id,
    };
    console.log(id);
    await axios
      .post(`http://localhost:3002/question/${id}/answers`, answerData, {
        headers: { user_jwt: localStorage.getItem("user_jwt") },
      })
      .then((data) => {
        console.log(data);
        Router.push(`/question/${id}/`);
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  };
  return (
    <div>
      <Navbar text={"Gal kas atsakys ..."} />

      <div className={styles.main}>
        <div>
          <h1>{question.title}</h1>
          <p>{question.questionText}</p>
        </div>
        <div className={styles.answers}>
          {answers.map((answer) => {
            return <AnswerList answer={answer} />;
          })}
        </div>
        <div>
          <TextInput
            type="textarea"
            value={answerText}
            placeholder="Question description"
            onChange={setAnswerText}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button onClick={onClickHandler} text={"Answer"} />
        </div>
      </div>
      <div>
        <BackButton
          text={"BACK"}
          onClick={() => {
            Router.push("/");
          }}
        />
      </div>
    </div>
  );
};
export default Id;

export async function getServerSideProps(ctx) {
  const id = ctx.params.id;
  console.log("is web", id);
  const response = await axios.get(
    `http://localhost:3002/question/${id}/answers`
  );
  const questionResponce = await axios.get(
    `http://localhost:3002/questions/${id}`
  );

  return {
    props: {
      answers: response.data.results,
      question: questionResponce.data.results,
      id: id,
    },
  };
}

// export async function getServerSideProps(contex) {
//   // console.log("contex", contex);

//   const response = await axios.get("http://localhost:3002/questions");
//   console.log(response.data.questions);
//   return {
//     props: {
//       questions: response.data.questions,
//     },
//   };
// }
