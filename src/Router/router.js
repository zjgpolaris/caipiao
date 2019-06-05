import React from 'react'
import loadable from '@loadable/component'
import {Route} from 'react-router-dom'
const Home = loadable(() => import('../Components/Home/Home'))
const Discovery = loadable(() => import('../Components/Discovery/Discovery'))
const LotteryDraw = loadable(() => import('../Components/LotteryDraw/LotteryDraw'))
const OnePurchase = loadable(() => import('../Components/OnePurchase/OnePurchase'))
const Profile = loadable(() => import('../Components/Profile/Profile'))

export const routes = [
    {
        path:'/home',
        component:Home,
        name:'首页',
        children : [
            {path:'/home/daletou',name:'大乐透',component:loadable(() => import('../Components/Home/Lotterys/daletou'))},
            {path:'/home/shuangseqiu',name:'双色球',component:loadable(() => import('../Components/Home/Lotterys/shuangseqiu'))},
        ]
    },
    {path:'/onepurchase',component:OnePurchase,name:'一元购'},
    {path:'/discovery',component:Discovery,name:'发现'},
    {path:'/lotterydraw',component:LotteryDraw,name:'开奖'},
    {path:'/profile',component:Profile,name:'我的'}
]

export const RouteWithSubRoute = (route) => {
    return (
        <Route
        path={route.path}
        render={(props)=>{
            return <route.component  {...props} children={route.children}/>
        }}
        >
        </Route>
    )
}