import { JumbotronComp, NewsList } from "./";

export const ContainerComp = () => {
  return (
    <>
      <div className="container">
        <JumbotronComp />
        <NewsList />
      </div>
    </>
  );
};
