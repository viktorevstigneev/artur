import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";
import Loading from "../utils/loading/Loading";
import { Link, useHistory, useParams } from "react-router-dom";


function Main() {
  const state = useContext(GlobalState);

  const [categories] = state.categoriesAPI.categories;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;

  const history = useHistory();
  const param = useParams();

  const [products] = state.productsAPI.products;
  const [onEdit, setOnEdit] = useState(false);
  const [callback, setCallback] = state.productsAPI.callback;

  return (
    <div className="main">
        <h1 className="main__title">Добро пожаловать!</h1>
        <p className="main__desription">Этот сайт предназначен для подбора животных. 
        На нем вы можете найти и прочитать информацию о том животном, 
        который вас интересует,а так же вы можете заказать его. Так же заказть животное вам поможет чат-бот, 
        для этого нажмите на пурпуную иконку внизу экрана.
        Для того чтобы начать просматривать нажмите кнопку начать.</p>
        <Link className="main__start" to="/"> Начать </Link>
    </div>
  );
}

export default Main;
