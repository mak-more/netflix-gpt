# Create React APP
- npx create-react-app netflix-gpt ('netflix-gpt' is folder name)

# Install & Config. Tailwind.css (https://tailwindcss.com/docs/guides/create-react-app)
- npm install -D tailwindcss
- npx tailwindcss init
- tailwind.config.js (add code in this file from above url)
- @tailwind base; @tailwind components; @tailwind utilities; (add in index.css)

# Features NetFlix has
- Homepage (without login user)
  - Login/Sign Up form
  - redirect to Homepage with login user (after login)

- Homepage (with login user - after authentication)
  - Header
  - Main Movie
    - Trailor in background
    - Title & descp.
  - Movie Suggestions
    - Movie lists

- Netflix GPT
  - Search Bar
  - Movie Suggestions

  # MISC
  - Formik (https://formik.org/ - use this library for big forms)
  - Form Validation
  - useRef Hook
  - Regex Validation
  - Install, Config. Firebase & create project into Firebase (https://firebase.google.com/)
  - Open AI - https://platform.openai.com (Login)
  - Install "open ai" library - "npm install openai"
  - Netflix GPT with Open Ai
  - Memoization (API calls only once)
    - Add (.env) file - 'to stores API Keys'.
    - Token & Ignore it on (.gitignore) file.
    - Call those Keys in (constant.js) file.
  - responsive header by 'Tailwind CSS'  
  
 # Firebase
 - firebase login (Sign in to Google)
 - firebase init (Initiate your project)
 - firebase deploy (When you're ready, deploy your web app)

 # TMDB (The Movie DataBase API)
 - Login In
 - Register TMDB API & create an app & get access token
 - Get data from TMDB "Now Playing Movies"
 
 # GPT
 - GPT search in header
 - 