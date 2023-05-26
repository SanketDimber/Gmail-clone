import { Suspense, lazy } from "react";
import "./App.css";
import { routes } from "./routes/routes";
import SuspenseLoader from "./components/common/SuspenseLoader";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
} from "react-router-dom";


const ErrorComponent = lazy(() => import('./components/common/ErrorComponents'));

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path={routes.main.path}
                element={<Navigate to={`${routes.emails.element}/inbox`} />}
            />
            <Route path={routes.main.path} element={<routes.main.element />}>
                <Route
                    path={`${routes.emails.path}/:type`}
                    element={<routes.emails.element />}
                    errorElement={<ErrorComponent />}
                />
                <Route
                    path={routes.view.path}
                    element={<routes.view.element />}
                    errorElement={<ErrorComponent />}
                />
            </Route>

            <Route
                path={routes.invalid.path}
                element={<Navigate to={`${routes.emails.path}/inbox`} />}
            />
        </Route>
    )
);
 
function App() {
    return (
        <Suspense fallback={<SuspenseLoader />}>
            <RouterProvider router={router} />
        </Suspense>
    );
} 

export default App;
