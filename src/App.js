import React from 'react';
import './App.css';
import {  } from 'antd-mobile';
import {BrowserRouter as Router,NavLink,Switch} from 'react-router-dom'
import {routes,RouteWithSubRoute} from './Router/router'


class App extends React.Component {
    render(){
        console.log(routes)
        return (
            <Router>
                <div className="App">
                    <Switch>
                        {
                            routes.map((item,index)=>{
                                return (
                                    <RouteWithSubRoute key={item.name} {...item} />
                                )
                            })
                        }
                    </Switch>
                    <div className="footer">
                        {
                            routes.map((item,index)=>{
                                return (<div key={item.path}>
                                    <NavLink to={item.path}>{item.name}</NavLink>
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
