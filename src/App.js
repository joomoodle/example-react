import React from "react";
import Form from "./Components/Form";
import "./App.css";
function App() {
  const [data, setData] = React.useState([]);
  const [edit, setEdit] = React.useState(null);

  return (
    <div className="App">
      <Form
        onAdd={(values) => {
          console.log(edit);
          if (edit) {
            let copyState = [...data];
            copyState[edit.index] = values;
            setData([...copyState]);
            setEdit(null);
            return true;
          }
          setData([...data, values]);
        }}
        dataDefault={edit}
      />
      <ul className={"list"}>
        {data.map((item, index) => {
          return (
            <li>
              {item.name}{" "}
              <button
                onClick={() => {
                  setEdit({ ...item, index });
                }}
              >
                Editar
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
