const NoteTitle = ({updateNotes}) => {
  return (
    <div className="mb-3 mt-3">
      <div className="navbar navbar-light bg-warning bg-gradient d-flex justify-content-center">
        <div>
          <a className="navbar-brand" href="#0">
            Notes
          </a>
        </div>
        <button className="btn btn-primary ml-auto" onClick={updateNotes}>Update</button>
      </div>
    </div>
  );
};

export default NoteTitle;
