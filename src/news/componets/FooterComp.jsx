import { Link } from "react-router-dom";

export const FooterComp = ({ back = false }) => {
  return (
    <footer className="blog-footer">
      <p>Las noticias acá desplegadas, son gracias a https://newsapi.org/ </p>
      <p>
        Sitio de noticias mundiales construido por {" "}
        <a href="https://github.com/rbrenesr" target="_blanck" >rbrenesr</a>
        
      </p>
      <p>        
        <a href="#">Back to top</a>
        {
          (!back)?'': <Link to="/">Back</Link>
        }
      </p>
    </footer>
  );
};
