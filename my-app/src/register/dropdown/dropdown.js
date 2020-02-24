import React from 'react';
import HttpService from '../../tools/httpService';
const http = new HttpService();

class DropDownScale1 extends React.Component{
    constructor(props){
        super(props);
        this.items = ["item1","item2","item3"];
        this.state = {
            suggestions = [],
        };
        this.loadScales = this.loadScales.bind(this);
		this.loadScales();
    }

    
    loadScales = () => {
        var self = this;
        http.getScale1().then(data => {
           // self.setState({scale1: data})
            //console.log(this.state.scale1)
        }, err => {
					
        }); 
    }
    onTextChange = (e) =>{
        const value = e.target.value;
        let suggestions = []
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(regex);
        }
        this.setState(() => ({ suggestions }));
      
    }

    renderSuggestions (){
        const {suggestions} = this.state;
        if (suggestions.length === 0){
            return null;
        }
        return (
            <ul>
            {this.items.map((item) => <li>{item}</li>)}
        </ul>
        );
    }


    render(){
        return(
            <div>
                <input onChange={this.onTextChange} type="text"></input>
              {this.renderSuggestions}
            </div>
        )
    }
}
export default DropDownScale1

