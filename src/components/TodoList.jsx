import {useState, useEffect} from "react";

function TodoList() {
  const [todos, setTodos] = useState([]); // todo list를 담는 state, 초기 값은 빈 배열
  const [inputValue, setInputValue] = useState(""); // 입력한 todo를 담는 state, 초기 값은 빈 문자열
  const [count, setCount] = useState(0); // 완료한 todo의 개수를 담는 state, 초기 값은 0

  useEffect(() => {
    const data = [
      // 이곳에 초기 렌더링 시 표시 될 '객체 형태의 할 일들'을 작성해주세요. (hint: 객체의 key는 id, text, completed 입니다.)
    ];
    // 생성한 todo를 state의 상태 변수인 todos 에 저장해주세요
  }, []);

  useEffect(() => {
    // 이곳에 todos에 변화가 생길 때마다 완료한 할 일의 개수(count)를 'update' 하도록 하는 코드를 작성해주세요. (+ dependency array 에는 어떤 값이 들어가야 할까요?)
  }, []);

  useEffect(() => {
    // 이곳에 count의 update를 감지하면서 모든 할 일 모두 완료했을 때 "오늘 할 일을 모두 완료하셨네요!"를 출력하는 알림창이 뜨도록 코드를 작성해주세요. (+ dependency array 에는 어떤 값이 들어가야 할까요?)
  }, []);

  const handleInput = (e) => {
    // 이곳에 입력창에 입력한 값이 state의 상태 변수인 inputValue에 저장되도록 코드를 작성해주세요.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {id: Date.now(), text: inputValue, completed: false};
    setTodos(/* 이곳에 기존의 todos에 새로 생성된 newTodo를 추가하도록 하는 코드를 작성해주세요 (hint: 배열에서의 spread 연산자 활용) */);
    setInputValue("");
  };

  const handleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          /* 이곳에 기존의 todo의 객체 속성에서 completed 객체의 속성만 변경되도록 하는 코드를 작성해주세요 (hint: 객체에서의 spread 연산자 활용) */
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todolist">
      <h1>Todo List</h1>
      <p>현재 {count}개 완료</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => handleTodo(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>
              {todo.text}
            </span>
            {/* 어른 사자의 길을 수행 할 때 아래 코드의 주석을 풀어 handleDelete 함수를 정의해주시면 됩니다*/}
            {/* <button>삭제</button> */}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default TodoList;
