import React,{Component} from 'react'
import './Register.css'
import {NavBar,Icon,InputItem,Button} from 'antd-mobile'
import axios from 'axios'
import apis from '../../apis/apis'

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            imglist:this.props.location.params,
            username:'',
            password:'',
            email:'',
            phone:''
        }
        this.goBack = this.goBack.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
    }
    render(){
        return (
            <div className="Register">
                <NavBar
                style={{background:'#D91D37',height:'64px'}}
                onLeftClick={() => this.goBack()}
                leftContent={[
                    <Icon key="1" type="left" style={{ marginRight: '16px' }} />,
                    <span key="2" style={{fontSize:"18px"}}>返回</span>
                  ]}
                >
                    <span>注册</span>
                </NavBar>
                <div className="registerIunput">
                    <InputItem onChange={this.changeUsername} value={this.state.username}>用户名</InputItem>
                    <InputItem type="password" onChange={this.changePassword} value={this.state.password}>密码</InputItem>
                    <InputItem onChange={this.changeEmail} value={this.state.email}>邮箱</InputItem>
                    <InputItem type="phone" onChange={this.changePhone} value={this.state.phone}>电话</InputItem>
                    <Button type="warning" style={{marginTop:'10px'}} onClick={this.handleRegister}>注册</Button>
                </div>
            </div>
        )
    }
    goBack(){
        this.props.history.go(-1)
    }
    handleRegister(){
        console.log('sd')
        const userInfo = {
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
            phone:this.state.phone,
        }
        axios.post(apis.register,userInfo).then((resp)=>{
            console.log(resp)
        })
    }
    changeUsername(ev){
        this.setState({
            username: ev
        })
    }
    changePassword(ev){
        this.setState({
            password: ev
        })
    }
    changeEmail(ev){
        this.setState({
            email: ev
        })
    }
    changePhone(ev){
        this.setState({
            phone: ev
        })
    }
}

export default Register