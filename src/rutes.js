import React, { lazy } from 'react'
import { HomeRedirect } from './routeUtils'
import RouteController from './routercontoller'
const Dashboard = lazy(() => import('./components/pages/inicio'))
const Login = lazy(() => import('./components/pages/Login'))
const Home = lazy(() => import('./components/pages/Home'))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomeRedirect
    },
    {
        path: "/login",
        exact: true,
        render: props => <Login {...props} />
    },
    {
        path: "/inicio",
        render: props => <RouteController component={Home} {...props} />,
        routes: [
            {
                path: "/inicio",
                exact: true,
                render: props => <RouteController component={Dashboard} {...props} />
            }
        ]
    }
]

export default routes