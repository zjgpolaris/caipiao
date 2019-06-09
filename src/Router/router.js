import React from 'react'
import loadable from '@loadable/component'
import {Route} from 'react-router-dom'
const Home = loadable(() => import('../Components/Home/Home'))
const Discovery = loadable(() => import('../Components/Discovery/Discovery'))
const LotteryDraw = loadable(() => import('../Components/LotteryDraw/LotteryDraw'))
const OnePurchase = loadable(() => import('../Components/OnePurchase/OnePurchase'))
const Profile = loadable(() => import('../Components/Profile/Profile'))
const Login = loadable(() => import('../Components/Login/Login'))

export const routes = [
    {
        path:'/home',
        component:Home,
        name:'首页',
        icon:'iconzhuye',
        children : [
            {path:'/home/daletou',name:'大乐透',component:loadable(() => import('../Components/Home/Lotterys/daletou'))},
            {path:'/home/shuangseqiu',name:'双色球',component:loadable(() => import('../Components/Home/Lotterys/shuangseqiu'))},
        ]
    },
    {path:'/onepurchase', icon:'iconqianbao1',component:OnePurchase,name:'一元购'},
    {path:'/discovery', icon:'iconfaxian',component:Discovery,name:'发现'},
    {path:'/lotterydraw', icon:'iconjiangbei',component:LotteryDraw,name:'开奖'},
    {path:'/profile', icon:'iconwode',component:Profile,name:'我的'},
]
export const LoginRoute = [
    {path:'/login',component:Login,name:'登录'},
    {path:'/register',component:loadable(() => import('../Components/Register/Register')),name:'注册'},
    {path:'/home/:id',component:loadable(() => import('../Components/Home/Lotterys/game')),name:'玩法'},
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