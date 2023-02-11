import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetArticlesBySearch } from "../../store/news/thunks";
import { NewItem } from "./NewItem";

export const NewsList = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(startGetArticlesBySearch());
  }, [articles]);



  return (
    <>
      <div className="row mb-2 d-flex justify-content-center">
        {articles.map((article) => (
          <NewItem key={new Date().getTime() + article.author} article={ article } />
        ))}
      </div>
    </>
  );
};
