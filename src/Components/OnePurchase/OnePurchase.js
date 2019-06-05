import React,{Component} from 'react'
import './OnePurchase.css'
import { NavBar } from 'antd-mobile';

class OnePurchase extends Component {
    render(){
        return (
            <div className="OnePurchase">
                <NavBar
                style={{background:'#D91D37',height:'64px'}}
                onLeftClick={() => console.log('onLeftClick')}
                leftContent={[
                    <span key="1"  className="iconfont">&#xe63b;</span>
                ]}
                rightContent={[
                    <span key="1" className="iconfont">&#xe696;</span>
                ]}
                >网易一元购</NavBar>
                一元购
            </div>
        )
    }
}

export default OnePurchase