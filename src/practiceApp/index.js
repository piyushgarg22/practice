import React,{Component} from 'react';
import Navbar from './components/navbarComponent';
import Menu from './components/menuComponent';
import {Dishes} from './shared/dishes';

export default class PracticeApp extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:Dishes
        }
    }
    render=()=>{
        return <div>
           <Navbar/>
           <Menu dishes={this.state.dishes}/>
        </div>
    }
}