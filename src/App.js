import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_PENDING, POST_USER_PENDING } from "./redux/main/action";

function App() {

  let [name, setName] = useState("")
  let [age, setAge] = useState("")
  let dispatch = useDispatch();

  let result = useSelector((state) => state.userReducer);

  let handleAdd = (e) => {
    e.preventDefault()

    const user = {
      name,
      age
    }

    dispatch({ type: POST_USER_PENDING, payload: user })
                            
  }

  useEffect(() => {
    dispatch({ type: GET_USER_PENDING })
  }, [])

  return (
    <div className="App">
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleAdd}>submit</button>
      {
        result.user?.map((val) => {
          return (
            <>
              <h1>{val.name}</h1>
              <h1>{val.age}</h1>
            </>
          )
        })
      }
    </div>
  );
}

export default App;
