import { Link, Navigate, useNavigate } from "react-router-dom";

export const NewItem = ({ article }) => {
  const navigate = useNavigate();

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={article.urlToImage}
        className="card-img-top"
        alt={article.url}
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <Link to={`new/${article.title}`}>Más..</Link>
      </div>
    </div>
  );
};
