import {useState} from "react";
import './App.css';
import uuid from 'react-uuid';


function App() {
  
  const [title,setTitle] = useState("");
  const [contents,setContents] = useState("");

  const [todos, setTodos] =useState([
    {
      id: uuid(),
      title:'제목1',
      contents:'내용1',
      isDone:false,
    },
    {
      id: uuid(),
      title:'제목2',
      contents:'내용2',
      isDone:true,
    },
    {
      id:uuid(),
      title:'제목3',
      contents:'내용3',
      isDone:false,
    },
    {
      id:uuid(),
      title:'제목4',
      contents:'내용4',
      isDone:false,
    }
  ]);

  const todoList = todos.filter(function (todo){
    return todo.isDone === false;
  }); // 할일 목록

  
  const doneList = todos.filter(function (todo){
    return todo.isDone === true;
  }); // 할일 목록

  return (
    <div>
      <header
      style={{
        backgroundColor:'#f7e9c3',
        padding:"10px",
      }}
      >헤더
      </header>
      <main
        style={{
        backgroundColor:'#afdeb2',
        padding:"10px",
      }}>
        <div>
  <form 
      onSubmit={(event) => {
        event.preventDefault();
        const newTodo = {
          id: uuid(),
          title: title,
          contents : contents,
          isDone: false,
        };

        setTodos([...todos, newTodo]);
      }}
      >
        <input value={title} onChange={(event)=>{
        setTitle(event.target.value);
        }}/>
        <input value={contents} onChange={(event)=>{
        setContents(event.target.value);
        }}/>
        <button type="submit">입력</button>
      </form>          
      </div>

        <div>
          <h1>리스트영역</h1>
          <div> 
            <h2>할일 목록</h2>
            {todoList.map(function (todo){
            return(
              <div
                key={todo.id}
                style={{
                border:'1px solid black',
                margin:'10px',
                paddingLeft:"10px",
                paddingBottom:"20px",
              }}>
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <p>완료여부 : {todo.isDone.toString()}</p> 
                <button 
                onClick={() => {
                  const newTodos = todos.map ((item) => {
                    if (item.id === todo.id) {
                      return {
                        ...item, isDone :!item.isDone,
                      };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);

                }}>완료 </button>
                <button onClick={()=>{
                  const deletedTodos = todos.filter(item=>{
                    return item.id !== todo.id
                  });

                  setTodos(deletedTodos);
                }}  >삭제 </button>
              </div>
            );
          })}
          </div>          
          <div> 
            <h2>완료된 목록</h2>
            {doneList.map(function (todo){
            return(
              <div
                key={todo.id}
                style={{
                border:'1px solid black',
                margin:'10px',
                paddingLeft:"10px",
                paddingBottom:"20px",
              }}>
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <p>완료여부 : {todo.isDone.toString()}</p> 
                <button 
                onClick={() => {
                  const newTodos = todos.map ((item) => {
                    if (item.id === todo.id) {
                      return {
                        ...item, isDone :!item.isDone,
                      };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);

                }}>완료 취소  </button>
                <button onClick={()=>{
                  const deletedTodos = todos.filter(item=>{
                    return item.id !== todo.id
                  });

                  setTodos(deletedTodos);
                }}  >삭제</button>
              </div>
            );
          })}
          </div>

          
        </div>
        </main>
      <footer
        style={{
          backgroundColor:'#b5afde',
          padding:"10px",
        }}
      >푸터
      </footer>
      
    </div>
  );
}

export default App;
