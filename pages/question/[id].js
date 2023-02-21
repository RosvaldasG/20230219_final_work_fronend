import React from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import styles from "../question/question.module.css";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import { useState } from "react";
import Router from "next/router";
import AnswerList from "@/components/answerList/AnswerList";

const Id = ({ answers, question, id }) => {
  const [answerText, setAnswerText] = useState();

  // const userIdFromToken = localStorage.getItem("user_jwt");
  // console.log(userIdFromToken);

  const onClickHandler = async () => {
    const answerData = {
      answerText: answerText,
      // userId: question.userId,
      questionId: id,
    };

    await axios
      .post(`http://localhost:3002/question/${id}/answers`, answerData, {
        headers: { user_jwt: localStorage.getItem("user_jwt") },
      })
      .then((data) => {
        console.log(data);
        Router.push(`/question/${id}/`);
      });
  };

  return (
    <div>
      <Navbar />
      <Link href="/">Back</Link>
      <div>
        <h1>{question.title}</h1>
        <p>{question.questionText}</p>
      </div>
      <div className={styles.answersMain}>
        {answers.map((answer) => {
          return <AnswerList answer={answer} />;
        })}
      </div>
      <div>
        <Input
          type="text"
          value={answerText}
          placeholder="Question description"
          onChange={setAnswerText}
        />
      </div>
      <div>
        <Button onClick={onClickHandler} text={"Answer"} />
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
