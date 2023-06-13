import { lazy, LazyExoticComponent } from 'react';

const Gallery = lazy(() => import('./Gallery/Gallery'))
const SelectedPhoto = lazy(() => import('./SelectedPhoto/SelectedPhoto'))
const InfoPage = lazy(() => import('./Info/InfoPage'))
const TestPage = lazy(() => import('./Test/TestPage'))

export const routes: Route[] = [
    {path: '/gallery', element: Gallery},
    {path: '/gallery/:imgId', element: SelectedPhoto},
    {path: '/info/', element: InfoPage},
    {path: '/test/', element: TestPage},
    {path: '*', element: Gallery},
]

export type Route = { path: string, element: LazyExoticComponent<() => JSX.Element> }
