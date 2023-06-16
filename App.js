import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, task: "리액트공부하기", name: "끝까지포기하지않기" },
  ]);

  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [doneTodo, setDoneTodo] = useState([]);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const taskChangeHandler = (event) => {
    setTask(event.target.value);
  };

  // 추가 버튼클릭
  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      task: task,
      name: name,
    };
    setUsers([...users, newUser]);
  };

  //삭제 버튼 클릭
  const clickRemoveHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <header className="header-style">
        <h1>Todo List</h1>
      </header>

      <div className="input-style">
        <div className="input">
          할일:&nbsp; <input value={name} onChange={nameChangeHandler}></input>
          메모 : <input value={task} onChange={taskChangeHandler}></input>
          <br></br>
        </div>
        <button className="btn" onClick={clickAddButtonHandler}>
          추가{" "}
        </button>
      </div>

      <h3>Working.. 🔥</h3>
      <div className="app-style">
        {users.map(function (item) {
          return (
            <div key={item.id} className="component-styel">
              <b>{item.task}</b>
              {item.name}
              <button onClick={() => clickRemoveHandler(item.id)}>삭제</button>
              <button>완료</button>
            </div>
          );
        })}
      </div>
      <div className="doneList">
        <h3>Done.. 🔥</h3>
      </div>
    </div>
  );
};

export default App;
