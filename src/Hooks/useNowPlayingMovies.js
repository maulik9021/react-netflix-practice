import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from '../Utils/movieSlice';

const useNowPlayingMovies = () => {
   const dispatch = useDispatch();

   const getNowPlayingMovies = async () => {
      const data = fetch('', API_Options);
      const json = (await data).json();
      dispatch(addNowPlayingMovies(json));
   }

   useEffect(() => {
      getNowPlayingMovies();
   }, []);
};

export default useNowPlayingMovies;