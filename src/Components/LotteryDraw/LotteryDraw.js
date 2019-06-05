import React,{Component} from 'react'
import './LotteryDraw.css'

class LotteryDraw extends Component {
    render(){
        return (
            <div className="LotteryDraw">
                <header style={{display:'flex',justifyContent:'space-between'}}>
                    <span>开奖信息</span>
                    <span>开奖推送</span>
                </header>
                开奖
            </div>
        )
    }
}

export default LotteryDraw