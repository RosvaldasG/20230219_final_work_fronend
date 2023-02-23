import styles from "./answerList.module.css";
import Button from "../button/Button";
import axios from "axios";

const AnswerList = ({ answer }) => {
  const buttonAction = async () => {
    console.log(localStorage.getItem("user_jwt"));
    await axios
      .delete(`http://localhost:3002/answers/${answer.answerId}`, {
        headers: { user_jwt: localStorage.getItem("user_jwt") },
      })
      .then((data) => {
        // Router.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  };

  const actionLikes = async (data) => {
    console.log(data);
    console.log(localStorage.getItem("user_jwt"));
    await axios
      .post(`http://localhost:3002/answersLikes/${answer.answerId}`, {
        headers: { user_jwt: localStorage.getItem("user_jwt") },
        likes: data,
      })
      .then((data) => {
        // Router.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.statusText);
        alert(err.response.statusText);
      });
  };

  return (
    <div className={styles.answerMain}>
      <div className={styles.textBox}>
        <div>{answer.answerText}</div>
        <div>{answer.timeStamp}</div>
      </div>

      <div>
        <Button onClick={buttonAction} text={"Delete"} />
      </div>
      <div>
        <p onClick={() => actionLikes(1)}>LIKE</p>
        <h1>{answer.likes}</h1>
        <p onClick={() => actionLikes(-1)}>DISLIKE</p>
      </div>
    </div>
  );
};

export default AnswerList;
