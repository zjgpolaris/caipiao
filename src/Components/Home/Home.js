import React,{Component} from 'react'
import './Home.css'
import { NavBar } from 'antd-mobile';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            lotterys : [
                {name:'双色球',en:'ssq',imgurl:require('../../img/ssq@2x.png'),subtitle:'2元中1000万'},
                {name:'大乐透',en:'dlt',imgurl:require('../../img/dlt@2x.png'),subtitle:'奖池超72亿'},
                {name:'快3系类',imgurl:require('../../img/kuai3@2x.png'),subtitle:'查历史开奖'},
                {name:'3D',en:'3d',imgurl:require('../../img/3d@2x.jpeg'),subtitle:'暂停销售'},
                {name:'返奖大转盘',imgurl:require('../../img/5a7ad616c94aea37.png'),subtitle:'百分百中大奖'},
                {name:'走势图',imgurl:require('../../img/9cee1329f19f731b.png'),subtitle:'中奖走势研究'},
                {name:'冬日福利',imgurl:require('../../img/2017011115TT63252724.png'),subtitle:'试试手气'},
                {name:'彩票预测',imgurl:require('../../img/icon_cp_pre_8072f60.png'),subtitle:'易友中奖必看'},
                {name:'竞技篮球',imgurl:require('../../img/icon_jclq_021b203.png'),subtitle:'暂停销售'},
                {name:'竞技足球',imgurl:require('../../img/icon_jczq_34229e3.png'),subtitle:'暂停销售'},
                {name:'体育资讯',imgurl:require('../../img/icon_sport_info_6550b59.png'),subtitle:'网易球迷乐园'},
                {name:'足球单关',imgurl:require('../../img/icon_jczq_spf_s_2541562.png'),subtitle:'猜中一场就中奖'},
                {name:'11选5系列',imgurl:require('../../img/icon_base_d11_cf48253.png'),subtitle:'查历史开奖',children:[
                    {name:'黑龙江11选5',imgurl:require('../../img/hy11x5@2x.png'),subtitle:'祝您好运'},
                    {name:'江西11选5',imgurl:require('../../img/icon_jxd11_ef29587.png'),subtitle:'强力推荐'},
                    {name:'广东11选5',imgurl:require('../../img/icon_gdd11_a802ed1.png'),subtitle:'陪你到深夜'},
                    {name:'重庆11选5',imgurl:require('../../img/icon_cqd11_71ce388.png'),subtitle:'简单好玩'},
                    {name:'浙江11选5',imgurl:require('../../img/易乐11选5@2x.png'),subtitle:'机会多'},
                    {name:'山东11选5',imgurl:require('../../img/icon_d11_9c98864.png'),subtitle:'奖池大'},
                ]},
            ]
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    render(){
        return (
            <div className="Home">
                <NavBar
                style={{background:'#D91D37',height:'64px'}}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <span key="1" className="iconfont" style={{color:'yellow'}} onClick={this.handleLogin}>&#xe60e;</span>,
                ]}
                >网易彩票</NavBar>
                <div className="HomeContent">
                    {
                        this.state.lotterys.map((item,index)=>{
                            return(
                                <div className="HomeConentItem" key={index+item.name} onClick={this.goToGame.bind(this,{en:item.en,name:item.name})}> 
                                    <div><img src={item.imgurl} alt={item.name}/></div>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    handleLogin(){
        this.props.history.push('/login')
    }
    goToGame(item){
        if(item.en){
            this.props.history.push('/home/'+item.en,item)
        }
    }
}

export default Home