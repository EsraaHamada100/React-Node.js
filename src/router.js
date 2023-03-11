import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import ProductsListPage from "./pages/products/ProductsListPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductsListPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    }
]);