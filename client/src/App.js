import React, { useState, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Header from "./components/headers/Header";
import MainPages from "./components/mainpages/Pages";
import ChatBot from "react-simple-chatbot";

let ggg = () => {};

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    ggg = async () => {
      const formData = new FormData();

      formData.append("Название", "Новый заказ");
      formData.append("вид животного", name.value);
      formData.append("порода животного", gender.value);
      formData.append("заказал:", age.value);

      try {
        const response = await fetch("https://formspree.io/f/xeqvapaw", {
          method: "POST",
          body: formData,
        });
      } catch (error) {}
    };
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        Вид
        <br />
        {name.value}
        <br />
        <br />
        Порода
        <br />
        {gender.value}
        <br />
        <br />
        Почта
        <br />
        <p style={{"font-size":"8px"}}>{age.value}</p>
      </div>
    );
  }
}

function App() {
  let vid = "";
  const handleEnd = async () => {
    ggg();
  };

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />
          <div
            className="MESS"
            onClick={() => {
              document.querySelector(".BOT").style.bottom = "0";
            }}
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </div>
          <div className="BOT">
            <button
              className="CLOSE"
              onClick={() => {
                document.querySelector(".BOT").style.bottom = "-700px";
              }}
            >
              &times;
            </button>

            <ChatBot
              handleEnd={handleEnd}
              steps={[
                {
                  id: "gr",
                  message: "привет, я помогу тебе заказать питомца,выбери вид:",
                  trigger: "name",
                },
                {
                  id: "name",
                  options: [
                    { value: "кошка", label: "кошка", trigger: "3" },
                    { value: "собака", label: "собака", trigger: "3" },
                    { value: "лошадь", label: "лошадь", trigger: "3" },
                    { value: "грызун", label: "грызун", trigger: "3" },
                    { value: "хорек", label: "хорек", trigger: "3" },
                    { value: "рептилия", label: "рептилия", trigger: "3" },
                    { value: "птица", label: "птица", trigger: "3" },
                    { value: "амфибия", label: "амфибия", trigger: "3" },
                    { value: "паук", label: "паук", trigger: "3" },
                  ],
                  trigger: "3",
                },
                {
                  id: "3",
                  message: "Напиши породу)",
                  trigger: "gender",
                },
                {
                  id: "gender",
                  user: true,
                  trigger: "5",
                },
                {
                  id: "5",
                  message: "Напиши адрес своей электронной почты)",
                  trigger: "age",
                },
                {
                  id: "age",
                  user: true,
                  trigger: "7",
                },
                {
                  id: "7",
                  message: "Спасибо, вот твои данные:",
                  trigger: "review",
                },
                {
                  id: "review",
                  component: <Review />,
                  asMessage: true,
                  trigger: "update",
                },
                {
                  id: "update",
                  message: "Хотели бы вы изменить какие-либо данные?",
                  trigger: "update-question",
                },
                {
                  id: "update-question",
                  options: [
                    { value: "yes", label: "Да", trigger: "update-yes" },
                    { value: "no", label: "Нет", trigger: "end-message" },
                  ],
                },
                {
                  id: "update-yes",
                  message: "Что хотели бы изменить?",
                  trigger: "update-fields",
                },
                {
                  id: "update-fields",
                  options: [
                    { value: "name", label: "Вид", trigger: "update-name" },
                    {
                      value: "gender",
                      label: "Порода",
                      trigger: "update-gender",
                    },
                    { value: "age", label: "Почта", trigger: "update-age" },
                  ],
                },
                {
                  id: "update-name",
                  update: "name",
                  trigger: "7",
                },
                {
                  id: "update-gender",
                  update: "gender",
                  trigger: "7",
                },
                {
                  id: "update-age",
                  update: "age",
                  trigger: "7",
                },
                {
                  id: "end-message",
                  message: "Спасибо, заказ принят)",
                  end: true,
                },
              ]}
            />
          </div>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
