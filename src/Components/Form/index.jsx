import React from "react";
import "./form.css";
const Form = ({ onAdd, dataDefault }) => {
  //useState es para declarar estados dentro de un hook o componente

  const [formValues, setFormValues] = React.useState({});

  //useEffect es una funcion que se encarga de ejecutarse cada que hay un cambio indicando en el array []  el objeto que va estar vigilando
  React.useEffect(() => {
    console.log("comproando el cambio", formValues);
  }, [formValues]);

  React.useEffect(() => {
    if (dataDefault) {
      setFormValues({ ...dataDefault });
    }
  }, [dataDefault]);

  //funcion que va cambiar el estado cada que hay un evento write en el input
  const handleChange = (input) => {
    //los ... es para copiar un objeto se llama spread operator
    setFormValues({
      ...formValues,
      [input.target.name]: +input.target.value
        ? +input.target.value
        : input.target.value,
    });
  };

  return (
    <div className="container-form">
      <span>Formulario de ejemplo</span>
      <div className={"item-form"}>
        <label>Name</label>
        <input
          type="text"
          name={"name"}
          onChange={handleChange}
          value={formValues.name || ""}
        />
      </div>
      <div className={"item-form"}>
        <label>LastName</label>
        <input
          type="text"
          name={"lastName"}
          onChange={handleChange}
          value={formValues.lastName || ""}
        />
      </div>
      <div className={"item-form"}>
        <label>He is married? </label>
        <select
          name={"married"}
          onChange={handleChange}
          value={formValues.married || ""}
        >
          <option value={""}>Seleccione una opcion</option>
          <option value={1}>Si</option>
          <option value={0}>No</option>
        </select>
      </div>
      {formValues.married === 1 && (
        <div className={"item-form"}>
          <label>husband's name</label>
          <input
            type="text"
            name={"husband"}
            onChange={handleChange}
            value={formValues.husband || ""}
          />
        </div>
      )}
      <button
        onClick={() => {
          if (!formValues.name) {
            alert("Ingresa el nombre");
            return false;
          }
          onAdd && onAdd(formValues);
          setFormValues({});
        }}
      >
        {dataDefault ? "editar" : "Agregar"}
      </button>
    </div>
  );
};

//exportar nuesto componente de tipo hooks
export default Form;
