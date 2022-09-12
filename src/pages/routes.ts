import { lazy, LazyExoticComponent } from 'react';

const Gallery = lazy(() => import('./Gallery/Gallery'))
const SelectedPhoto = lazy(() => import('./SelectedPhoto/SelectedPhoto'))
export const routes: Route[] = [
    {path: '/gallery', element: Gallery},
    {path: '/gallery/:imgId', element: SelectedPhoto},
    {path: '*', element: Gallery},
]

export type Route = { path: string, element: LazyExoticComponent<() => JSX.Element> }
