import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Paths from './constants/path';

import routes from './routes';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Link to={Paths.TEST_PAGE}>Test Page</Link>

            <Routes>
                {routes.map(({ name, path, Component }, index) => (
                    <Route
                        key={name + index}
                        path={path}
                        element={
                            <Suspense fallback={null}>
                                <Component />
                            </Suspense>
                        }
                    />
                ))}

                <Route path="*" element={<Navigate replace to={Paths.HOME} />} />
            </Routes>
        </div>
    );
}

export default App;
