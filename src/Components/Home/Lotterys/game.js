import React,{ Component } from 'react'
import './game.css'
import {NavBar,Icon,Button} from 'antd-mobile'
import apis from '../../../apis/apis'
import axios from 'axios'

class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            gamename : this.props.location.state.name,
            redArr:[],
            blueArr:[],
            arr : this.props.match.params.id==='ssq'?
            {red:33,blue:16}:
            this.props.match.params.id==='dlt'?{red:35,blue:12}:{bai:9,shi:9,ge:9}
        }
        this.goBack = this.goBack.bind(this)
        this.randomClick = this.randomClick.bind(this)
    }
    componentDidMount(){
        console.log(apis.findByGameName,this.props.match.params.id)
        axios.get(apis.findByGameName,{gameName:this.props.match.params.id,pageSize:20,pageNo:1}).then((resp)=>{
            console.log(resp)
        })
        if(window.DeviceMotionEvent){
            var _this = this
            var speed = 25;
            var x,y,z,lastx,lasty,lastz;
            x=y=z=lastx=lasty=lastz=0;
            window.addEventListener('devicemotion',function(event){
                console.log(event)
                console.log(this)
                var acceleration = event.accelerationIncludingGravity
                x = acceleration.x;
                y = acceleration.y;
                if(Math.abs(x-lastx)>speed||Math.abs(y-lasty)>speed){
                    _this.randomClick()
                }
                lastx=x;
                lasty=y
            },false)
        }
    }
    render () {
        return (
            <div className="Game">
                <NavBar
                style={{background:'#D91D37',height:'64px'}}
                onLeftClick={() => this.goBack()}
                leftContent={[
                    <Icon key="1" type="left" style={{ marginRight: '16px' }} />,
                    <span key="2" style={{fontSize:"18px"}}>返回</span>
                  ]}
                rightContent={[
                    <span key="3">助手</span>
                ]}
                >
                    <span>{this.state.gamename}</span>
                </NavBar>
                <div className="gameContent">
                    {
                        Object.keys(this.state.arr).map((item,index)=>{
                            let num =this.state.arr[item]
                            let newArr = new Array(num).join(',').split(',')
                            return (<ul key={item} className={item+'balls'} ref={item+'balls'}> 
                               {
                                    newArr.map((val,key)=>{
                                        if(item==='red'){
                                            const redArr = this.state.redArr
                                            for(let a=0;a<redArr.length;a++){
                                                if(key+1===redArr[a]){
                                                    return (
                                                    <li key={key}
                                                    className = 'red'
                                                    onClick={this.handleClick.bind(this,key+1,item)}>
                                                        {key+1}
                                                    </li>
                                                    )
                                                }
                                            }
                                        }else if(item==='blue'){
                                            const blueArr = this.state.blueArr
                                            for(let a=0;a<blueArr.length;a++){
                                                if(key+1===blueArr[a]){
                                                    return (
                                                    <li key={key}
                                                    className = 'blue'
                                                    onClick={this.handleClick.bind(this,key+1,item)}>
                                                        {key+1}
                                                    </li>
                                                    )
                                                }
                                            }
                                        }
                                        return (
                                        <li key={key}
                                        onClick={this.handleClick.bind(this,key+1,item)}>
                                            {key+1}
                                        </li>
                                        )
                                    })
                               }
                            </ul>)
                        })
                    }
                </div>
                <div className="gameFooter">
                    <Button inline onClick={this.randomClick}>机选</Button>
                    <Button inline>确定</Button>
                </div>
            </div>
        )
    }
    goBack(){
        this.props.history.go(-1)
    }
    handleClick(key,item,ev){
        if(ev.target.className===item){
            ev.target.className=''
            if(item==='red'){
                const redArr = [...this.state.redArr]
                const index = redArr.indexOf(key)
                redArr.splice(index,1)
                this.setState({
                    redArr
                })
            }else if(item==='blue'){
                const blueArr = [...this.state.blueArr]
                const index = blueArr.indexOf(key)
                blueArr.splice(index,1)
                this.setState({
                    blueArr
                })
            }
        }else{
            ev.target.className=item
            if(item==='red'){
                const redArr = [...this.state.redArr]
                redArr.push(key)
                this.setState({
                    redArr
                })
            }else if(item==='blue'){
                const blueArr = [...this.state.blueArr]
                blueArr.push(key)
                this.setState({
                    blueArr
                })
            }
        }
    }
    randomClick(){
        const gamename = this.props.match.params.id
        let length1,length2
        if(gamename==='ssq'){
            length1=6;
            length2=1
        }else if(gamename==='dlt'){
            length1=5;
            length2=2
        }
        let redArr = []
        let blueArr = []
        let red = this.state.arr.red
        let blue = this.state.arr.blue
        for(var a=0;a<length1;a++){
            let func = function(){
                var redball = Math.ceil(Math.random()*red)
                if(redArr.indexOf(redball)===-1){
                    redArr.push(redball)
                }else{
                    func()
                }
            }
            func()
        }
        for(var b=0;b<length2;b++){
            let func = function(){
                var blueball = Math.ceil(Math.random()*blue)
                if(blueArr.indexOf(blueball)===-1){
                    blueArr.push(blueball)
                }else{
                    func()
                }
            }
            func()
        }
        this.setState({
            redArr,blueArr
        })
    }
}

export default Game