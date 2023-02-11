import { Link, useParams } from "react-router-dom";

export const New = () => {
  const { q } = useParams();

  console.log(q);

  return (
    <>
      <h1>New</h1>

      <h3>{q}</h3>

      <Link to="/">Back</Link>
    </>
  );
};
