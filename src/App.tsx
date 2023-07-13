import { Profiler, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Generator } from '@components/Genrator';
import { LoginFormState } from '@components/LoginFormState';
import { LoginFormRefs } from '@components/LoginFormRefs';
import { Text } from '@atoms/Text';
import { Button } from '@ui/atoms/Button';
import { LoginPage } from '@pages/LoginPage';
import { HomePage } from '@pages/HomePage';
import { Page404 } from '@pages/Page404';
import { DetailsPage } from '@pages/DetailsPage';
import { Paths } from '@consts/router.paths';
import { Menu } from '@ui/molecules/Menu';
import { ThemeProvider } from '@components/Theme/ThemeContext';
import { BuggyComponent } from '@components/ErrorBoundary/BuggyComponent';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { ProductsPage } from '@pages/ProductsPage';
import { ProductDetailsPage } from '@pages/ProductDetailsPage';
import { CreateProductPage } from '@pages/CreateProductPage';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
// ]);

{/* <RouterProvider router={router} /> */}

function App() {

  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    // Aggregate or log render timings...
    // console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime });
  }

  return (
    <div>
      <div className="bg-white dark:bg-slate-900">
      <Profiler id="App" onRender={onRender}>
        <ThemeProvider>
          <BrowserRouter>
            <Menu />

            {/* <ErrorBoundary> */}
            {/* <ErrorBoundary fallback={<p>!#@$%#%#^</p>}> */}
              {/* <BuggyComponent /> */}
            {/* </ErrorBoundary> */}

            <div className="container">
              <Routes>
                <Route index path={Paths.HOME} element={<HomePage />} />
                <Route path={Paths.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
                <Route path={Paths.CREATE_PRODUCT} element={<CreateProductPage />} />
                <Route path={Paths.PRODUCTS} element={<ProductsPage />}>
                </Route>
                {/* <Route path={Paths.PRODUCTS} element={<ProductsPage />}>
                  <Route path={Paths.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
                  <Route path={Paths.CREATE_PRODUCT} element={<CreateProductPage />} />
                </Route> */}
                <Route path="details/:foo" element={<DetailsPage />} />
                <Route path={Paths.LOGIN} element={<LoginPage />} />
                  {/* <Route path="abc" element={<LoginPage />} />
                </Route> */}
                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </Profiler>
      </div>
    </div>
    // {/* <RouterProvider router={router} /> */}
  )
}

export default App
