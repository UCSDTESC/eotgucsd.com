import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect, type ComponentType } from 'react';

import EOTGLayout from './layouts/EOTGLayout';

const EOTGPage = lazy(() => import('./pages/EOTGPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function LoadingSpinner() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-eotg-green border-t-transparent" />
        </div>
    );
}

function withEOTGLayout(Child: ComponentType) {
    return function WrappedPage() {
        return (
            <EOTGLayout>
                <Child />
            </EOTGLayout>
        );
    };
}

function Routes() {
    useEffect(() => {
        console.log(
            '%c Interested in building awesome web projects? Email us at hello@tesc.ucsd.edu! ',
            `
            background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); 
            color: black; 
            font-size: 2rem; 
            text-align: center`
        );
    }, []);

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={withEOTGLayout(EOTGPage)}
                />
                <Route
                    path="/eotg"
                    exact
                    component={withEOTGLayout(EOTGPage)}
                />
                <Route component={NotFoundPage} />
            </Switch>
        </Suspense>
    );
}

export default Routes;
