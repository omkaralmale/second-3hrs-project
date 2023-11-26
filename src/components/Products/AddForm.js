import React, { useRef } from "react";
import "./AddForm.css";
const AddForm = (props) => {
  const name = useRef("");
  const description = useRef("");
  const price = useRef(0);
  const Large = useRef();
  const Medium = useRef();
  const Small = useRef();
  const handleSubmission = (event) => {
    event.preventDefault();
    const item = {
      name: name.current.value,
      description: description.current.value,
      price: +price.current.value,
      L: +Large.current.value,
      M: +Medium.current.value,
      S: +Small.current.value,
    };
    props.onSend(item);
    name.current.value = "";
    description.current.value = "";
    price.current.value = "";
    Large.current.value = "";
    Medium.current.value = "";
    Small.current.value = "";
  };
  return (
    <form className="add-form" onSubmit={handleSubmission}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="productName">Name</label>
          <input ref={name} type="text" id="productName" />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Description</label>
          <input ref={description} type="text" id="productDescription" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="productPrice">Price</label>
          <input ref={price} type="number" id="productPrice" />
        </div>
        <div className="form-group sizes">
          <div className="from-group">
            <input ref={Large} type="number" placeholder="L" />
            <input ref={Medium} type="number" placeholder="M" />
            <input ref={Small} type="number" placeholder="S" />
          </div>
        </div>
        <div />
      </div>
      <div className="form-row center">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default AddForm;
