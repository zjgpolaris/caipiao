import React,{ Component } from 'react'
import './Login.css'
import { NavBar,Icon,Carousel,InputItem,Button  } from 'antd-mobile';
import axiox from 'axios'
import apis from '../../apis/apis'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            imglist:[
                'http://pimg1.126.net/caipiao_info/images/headFigure/wapSeoSemAd/1537957782265_1.png',
                'http://pimg1.126.net/caipiao_info/images/headFigure/wapSeoSemAd/1517217578193_1.png',
                'http://pimg1.126.net/caipiao_info/images/headFigure/wapSeoSemAd/1544691542366_1.png'
            ],
            username:'',
            password:''

        }
        this.goBack = this.goBack.bind(this)
        this.loginin = this.loginin.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.goToRegister = this.goToRegister.bind(this)
    }
    render () {
        return (
            <div className="Login">
                <NavBar
                style={{background:'#D91D37',height:'64px'}}
                onLeftClick={() => this.goBack()}
                leftContent={[
                    <Icon key="1" type="left" style={{ marginRight: '16px' }} />,
                    <span key="2" style={{fontSize:"18px"}}>返回</span>
                  ]}
                >
                    <span>登录</span>
                </NavBar>
                <Carousel
                autoplay={true}
                infinite={true}
                >
                    {
                        this.state.imglist.map((item,index)=>{
                            return <img key={index} src={item}/>
                        })
                    }
                </Carousel>
                <div className="loginInput">
                    <InputItem 
                    placeholder='用户名/邮箱/手机号' 
                    onChange={this.changeUsername}
                    ref={el => this.inputusername = el}
                    ></InputItem>
                    <InputItem 
                    type="password" 
                    placeholder='密码'
                    onChange={this.changePassword}
                    ></InputItem>
                    <Button type="warning" style={{marginTop:'10px'}} onClick={this.loginin}>登录</Button>
                </div>
                 <div className="footerBTN">
                    <Button inline className="btn">忘记密码？</Button>
                    <Button inline className="btn" onClick={this.goToRegister}>注册</Button>
                 </div>
            </div>
        )
    }
    goBack(){
        console.log(this.props)
        this.props.history.go(-1)
    }
    loginin(){
        console.log(this.state)
        axiox.post(apis.login,{
            username:'zjg',
            password :'zjg123',
        }).then((resp)=>{
            console.log(resp.data.success)
        })
    }
    changeUsername(ev){
        console.log(ev)
        this.setState({
            username:ev
        })
        console.log(this.inputusername)
    }
    changePassword(ev){
        console.log(ev)
        this.setState({
            password:ev
        })
    }
    goToRegister(){
        this.props.history.push( '/register')
    }
}

export default Login