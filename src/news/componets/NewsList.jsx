import { useDispatch, useSelector } from "react-redux";
import { startGetArticlesBySearch } from "../../store/news/thunks";

export const NewsList = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.news);

  dispatch(startGetArticlesBySearch());

  return (
    <>
      <div className="row mb-2 d-flex justify-content-center">
        {articles.map((article) => (
          <div
            key={new Date().getTime() + article.author}
            className="card m-3"
            style={{ width: "18rem" }}
          >
            <img
              src={article.urlToImage}
              className="card-img-top"
              alt={article.url}
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href="#">Leer más...</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
