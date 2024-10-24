export const LOGO = "https://www.tradebulls.in/images/tradebulls-logo.svg";

export const API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzhhOGU0ZWU2NDM1MmFjMzE3YjBkMGU4YmY2Y2JmYSIsIm5iZiI6MTcyODk4MDk0MS4xNDczNjEsInN1YiI6IjY3MGUyNDc5MGI4MDA1MzdkNzVjZDU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x7IoadCswrAwZhfeGJmd3Wg_qHatJhoV9O3VY2oro6E'
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const SUPPORTED_LANGUAGES = [
  {identifier: 'eng', name: 'English'},
  {identifier: 'hindi', name: 'Hindi'},
  {identifier: 'spanish', name: 'Spanish'}
]

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
// export const OPEN_AI_KEY = "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";