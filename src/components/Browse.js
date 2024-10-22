import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>

      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
        <div className='relative top-20'>
          <div>
            <MainContainer />
            <SecondaryContainer />
          </div>
        </div>
        </>
      )}      
      
    </div>    
  );
}

export default Browse;
