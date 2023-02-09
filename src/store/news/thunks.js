// import { addTodo } from ".";

// export const starNewTodo = (todo) => {
//   return (dispatch, getState) => {
//     const tareas = getState().todo.todos;
//     dispatch(addTodo(todo));
//   };
// };

/**
 *    
  const init = () => {
        return JSON.parse(localStorage.getItem('Todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);



    useEffect(() => {

        localStorage.setItem('Todos', JSON.stringify(todos));

    }, [todos])
 * 
 * / */

import { articles } from "../../assets/articles";
import { getNews } from "./newsSlice";

export const startGetArticlesBySearch = () => {

  return async(dispatch, getState) => {
   
    // if (search == "") {
    //   throw new Error(`${search} is not a valid search`);
    // }

    //return articles.filter( heroe => heroe.publisher === publisher );
    //return articles;


    // const url = `https://newsapi.org/v2/everything?q=Programming&from=2023-02-08&sortBy=popularity&apiKey=611407ba942048cba4075dab96be0deb`;    
    // const resp = await fetch(url);
    // console.log(resp);
    // const { articles } = await resp.json();
    // console.log(articles);

    // const slicedArray = articles.slice(0, 10);

    // console.log(slicedArray);
      dispatch(getNews(articles));

  };
};
