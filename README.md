# React-Appwrite-Blog

## Setup Instructions

1. Git Clone

```
git clone /https://github.com/abhi-navz/react-appwrite-blog
```

2. Move into the directory

```
cd ./react-appwrite-blog
```

3. Install the dependencies

```
npm install
```

4. Run the Application

```
npm run dev
```
### Tailwind setup instructions in ur project [Link](https://tailwindcss.com/docs/guides/vite)

1. Install tailwind and other dependencies.

```
npm install -D tailwindcss postcss autoprefixer
```

2. Generate the `postcss.config.js` and `tailwind.config.js` file

```
npx tailwindcss init -p
```

3. Add the files and extensions to the content property in tailwind config.

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


```

4. Add the tailwind directive on the top of index.css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Then run the server tailwind should be integrated...

### Adding additional pluggins and dependencies
```
 npm i react-redux @reduxjs/toolkit react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
```