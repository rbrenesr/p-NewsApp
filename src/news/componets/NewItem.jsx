import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setActiveNew } from "../../store/news/newsSlice";

export const NewItem = ({ article }) => {
  const dispatch = useDispatch();

  const onRead = () => {
    dispatch(setActiveNew(article));
  };

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
        <Link to={"/new"} onClick={onRead}>
          Más..
        </Link>
      </div>
    </div>
  );
};
