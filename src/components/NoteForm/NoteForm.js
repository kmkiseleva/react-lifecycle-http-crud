import { useState } from "react";

const NoteForm = ({ addNewNotes }) => {
  const [textareaValue, setTextareaValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (textareaValue === "") {
      return;
    }
    addNewNotes(textareaValue);
    setTextareaValue("");
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setTextareaValue(value);
  };

  return (
    <form onSubmit={onSubmitHandler} className="mb-5">
      <div className="mb-3">
        <textarea
          className="form-control"
          name="newNotes"
          id="newNotes"
          rows="5"
          onChange={onChangeHandler}
          value={textareaValue}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default NoteForm;
