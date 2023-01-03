const List = ({ movie }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={movie.avatar} alt="asdasd"/>
        <title>{movie.name}</title>
        <div className="card-body">
          <p className="card-text">{movie.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;
