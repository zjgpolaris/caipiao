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
        // axios.get(apis.findByGameName,{gameName:this.props.match.params.id,pageSize:20,pageNo:1}).then((resp)=>{
        //     console.log(resp)
        // })
        console.log(window.DeviceMotionEvent)
        console.log(this.state.arr)
        // Object.keys(this.state.arr).map((item,index)=>{
        //     console.log(item,index)
        //     console.log(this.state.arr[item])
        // })
    }
    componentDidUpdate(){
        console.log(this.state)
        if(this.state.redArr.length>0){
            console.log([this.refs.redballs])
            const redArr = [...this.state.redArr]
            const length = this.state.redArr.length
            for(let a=0;a<length;a++){
                this.refs.redballs.children[redArr[a]-1].className = 'red'
            }
        }
        if(this.state.blueArr.length>0){
            console.log(this.refs.blueballs)
            const blueArr = [...this.state.blueArr]
            const length = this.state.blueArr.length
            for(let a=0;a<length;a++){
                this.refs.blueballs.children[blueArr[a]-1].className = 'blue'
            }
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
        console.log(key,item)
        console.log(ev.target)
        if(ev.target.className===item){
            ev.target.className=''
        }else{
            ev.target.className=item
        }
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
    randomClick(){
        console.log(Math.round(Math.random()*33))
        const redArr = []
        for(var a=0;a<6;a++){
            redArr.push(Math.round(Math.random()*33))
        }
        console.log(Math.round(Math.random()*16))
    }
}

export default Game