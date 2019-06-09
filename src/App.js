import React from 'react';
import './App.css';
import {  } from 'antd-mobile';
import {BrowserRouter as Router,NavLink,Switch,Route,Redirect} from 'react-router-dom'
import {routes,RouteWithSubRoute,LoginRoute} from './Router/router'


class App extends React.Component {
    render(){
        return (
            <Router>
                <div className="App">
                    <Switch>
                        {
                             LoginRoute.map((item,index)=>{
                                return (
                                    <RouteWithSubRoute key={item.name} {...item} />
                                )
                            })
                        }
                        {
                            routes.map((item,index)=>{
                                return (
                                    <RouteWithSubRoute key={item.name} {...item} />
                                )
                            })
                        }
                        
                        <Route path='/' render={()=>(<Redirect to="/home"/>)} />
                    </Switch>
                    <div className="footer">
                        {
                            routes.map((item,index)=>{
                                return (
                                <div key={item.path}>
                                    <NavLink
                                    activeClassName="selected"
                                    activeStyle={{fontWeight: "bold",color: "red"}} 
                                    to={item.path}
                                    >
                                        <span  className={'iconfont ' + item.icon}></span>
                                        {item.name}
                                        
                                    </NavLink>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </Router>
        )
    }
}
export default App;
