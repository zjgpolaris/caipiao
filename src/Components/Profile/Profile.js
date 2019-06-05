import React,{Component} from 'react'
import './Profile.css'
import { NavBar } from 'antd-mobile';

class Profile extends Component {
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
                我的
            </div>
        )
    }
}

export default Profile