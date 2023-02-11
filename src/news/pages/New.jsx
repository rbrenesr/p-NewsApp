import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { FooterComp } from "../componets/FooterComp";

export const New = () => {
  const dispatch = useDispatch();
  const { activeArticle } = useSelector((state) => state.news);


  

  return (
    <>
      <div className="container">
        <main role="main" className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h2 className="blog-post-title">{activeArticle.title}</h2>
                <p className="blog-post-meta">{activeArticle.publishedAt}</p>
                <p>{activeArticle.description}</p>

                
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <img
                  src={activeArticle.urlToImage}
                  className="img-fluid"
                  alt={activeArticle.url}
                  width='350px'                
                />

                
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>{activeArticle.content}</p>
            </div>
          </div>
        </main>

        <FooterComp back="true" />

        <Link to="/">Back</Link>
      </div>
    </>
  );
};
