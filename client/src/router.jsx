import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { getLogs } from './loaders'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        loader: getLogs,
    }
])