#### Complete App

[Todo]

#### Create React APP

[VITE](https://vitejs.dev/guide/)

```sh
npm create vite@latest
```
```sh
Ok to proceed? (y) y
```
```sh
Select a framework: » - Use arrow-keys. Return to submit.
     Vanilla
     Vue
>    React
     Preact
     Lit
     Svelte
     Solid
     Qwik
     Others
```

```sh
√ Select a framework: » React
? Select a variant: » - Use arrow-keys. Return to submit.
>   TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC
    Remix ↗
```

#### Vite - Folder and File Structure

```sh
npm i
```

```sh
npm run dev
```

- APP running on http://localhost:5173/
- .jsx extension


#### Remove Boilerplate

- remove App.css
- remove all code in index.css

  App.tsx

```tsx
const App = () => {
  return <h1>Todo App</h1>;
};
export default App;
```

#### Project Assets

- get assets folder from complete project

#### Global Styles

- saves times on the setup
- less lines of css
- speeds up the development

- if any questions about specific styles

#### Title and Favicon

- add favicon.ico in public
- change title and favicon in index.html

```html
  <head>
    <meta charset="UTF-8" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo</title>
  </head>
```

- resource [Generate Favicons](https://favicon.io/)

#### Install Packages (Optional)

- yes, specific package versions
- specific commands will be provided later
- won't need to stop/start server

```sh
npm install react-icons styled-components antd react-spinners @tanstack/react-query @tanstack/react-query-devtools react-router-dom clsx tailwind-merge

```

#### Setup Tailwind [talwind official vite setup](https://tailwindcss.com/docs/guides/vite)

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```
- replace tailwind.config.js with the below

```js
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

- add the following to index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Setup Tanstack react query

main.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
```

#### Add devtoolsTanstack react query

main.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {ReactQueryDevtools} from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
)
```


#### Router

[React Router](https://reactrouter.com/en/main)

- version 6.4 brought significant changes (loader and action)
- pages as independent entities
- less need for global state
- more pages

#### Setup Router

- if you sjipped installing the react router dom, then do the following

```sh
npm i react-router-dom
```

App.tsx

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>login</h1>,
  },
  {
    path: '/dashboard',
    element: (
      <div>
        <h2>dashbord</h2>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```

#### Create Pages

- create src/pages directory
- setup index.ts and following pages :

 

```jsx
const AddJob = () => {
  return <h1>AddJob</h1>;
};
export default AddJob;
```

#### Index

App.jsx

```jsx
import HomeLayout from '../pages/HomeLayout';
```

pages/index.js

```js
export { default as Login}  from './loginPage/LoginPage';
export { default as Dashboard } from './DashboardPage/DashboardPage';
```

App.tsx

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard, Login } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);
```

# LAYOUT WRAPPER FOR Login

- path ./components/layout/HomeLayout

```tsx
import { PropsWithChildren } from "react"

const HomeLayout:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div
     className="max-w-5xl px-5 mx-auto md:px-0"
    >{children}</div>
  )
}

export default HomeLayout
```

- modify react router in app.tsx

```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, Login } from "./pages";
import HomeLayout from "./components/Layout/HomeLayout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout>
        <Login />
      </HomeLayout>
    ),
  },
    {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

```