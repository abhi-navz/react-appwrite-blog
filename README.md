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
### Adding auto import sort for eslint

1. Install the pluggin

```
npm i eslint-plugin-simple-import-sort
```

2. Add rule in `eslintrc.cjs`

```
 "simple-import-sort/imports": "error",
```

3. Add `simple-import-sort` in the pluggin array of `eslintrc.cjs`

```
plugins: ["..", "simple-import-sort"],
```

4. Open settings.json in vscode configuration and add the below two lines to fix the issues as per eslint rule on save.

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

5. Most importantly don't forget to install `Eslint` extension if haven't already.

## Adding .env (enviornment variables to Project)

1. create a .env file in root directory of the project.
2. create varaible with prefix `VITE` for ex.
```
VITE_SOME_KEY=123
DB_PASSWORD=foobar // invalid
```
3. Loaded env variables are also exposed to your client source code via `import.meta.env` as strings.
```
console.log(import.meta.env.VITE_SOME_KEY) // 123
console.log(import.meta.env.DB_PASSWORD) // undefined

```