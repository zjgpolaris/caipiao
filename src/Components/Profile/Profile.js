import React,{Component} from 'react'
import './Profile.css'
import { NavBar,Button } from 'antd-mobile';

class Profile extends Component {
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }
    render(){
        return (
            <div className="Profile">
                <NavBar
                style={{background:'#D91D37',height:'64px'}}
                onLeftClick={() => console.log('onLeftClick')}
                leftContent={[
                    <span key="1" className="iconfont">&#xe673;</span>,
                    <span key="2" style={{ marginLeft: '20px',fontSize:'20px' }}>我的</span>
                ]}
                rightContent={[
                    <span key="1" className="iconfont">&#xe620;</span>
                ]}
                ></NavBar>
                <Button type="warning" style={{marginTop:'10px'}} onClick={this.handleLogin}>登录</Button>
            </div>
        )
    }
    handleLogin(){
        this.props.history.push('/login')
    }
}

export default Profile