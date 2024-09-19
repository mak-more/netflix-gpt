# Create React APP
- npx create-react-app netflix-gpt ('netflix-gpt' is folder name)

# Install & Config. Tailwind.css (https://tailwindcss.com/docs/guides/create-react-app)
- npm install -D tailwindcss
- npx tailwindcss init
- tailwind.config.js (add code from above url)
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