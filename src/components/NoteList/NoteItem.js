import { useCallback } from "react";

const NoteItem = ({ id, text, deleteNote }) => {
  const onDeleteHandler = useCallback(() => deleteNote(id), [id]);

  return (
    <div className="col-4 mb-2">
      <div className="card h-100">
        <div className="card-body">
          <p className="card-text">{text}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-danger" onClick={onDeleteHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
