import './App.scss'
import { routes } from './pages/routes';
import {Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

    return (
        <Routes>
            {routes.map(route =>
                <Route key={route.path} element = {<Suspense fallback = ''>
                    <route.element/>
                </Suspense>} path = {route.path}/>
            )}
        </Routes>
    )
}

export default App
