import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import ProductsListPage from "./pages/products/ProductsListPage";
import App from './App'
import NotFound from "./shared/NotFound";
import ProductInfoPage from "./pages/products/ProductInfoPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // Nesting routes => Here the things in app will appear in all pages
        children: [
            {
                path: '/',
                element: <ProductsListPage />,
            },
            {
                // /:id means that I will send a variable here not a static word
                path: '/product-info/:id',
                element: <ProductInfoPage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
        ]
    },
    {
        // WILD CARD ROUTE => The route that will appear to user if he write any
        // other text in the url
        path: '*',
        element: <NotFound />,
    }

]);