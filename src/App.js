import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './Utils/appStore'
import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage'
import RestaurantMenu from './components/RestaurantMenu'


const AppLayout=()=>{
    return(
       <Provider store={appStore}>
        <>
        <Header/>
        <Outlet/>
        </>
        </Provider>
       
        
    )

}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement:<ErrorPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
