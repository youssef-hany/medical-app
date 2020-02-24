import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Autosuggest from 'react-autosuggest';
import HttpService from '../tools/httpService';
import { trackPromise } from 'react-promise-tracker';
import './register.css';
import { register } from '../tools/axiosService';
import { dbSwitch } from '../tools/axiosService';
import Axios from 'axios';

const http = new HttpService();


class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            connection: false,
            suggestions: [],
            dblist: [],
            inpValue: '',
            db:'',
            dbC: '',
            dbselected: false,
            Ndb: '',
            name: '',
            age: '',
            gender: '',
           
            d1:'',
            d2:'',
    
            bsc1it1:'',
            bsc1it2:'',
            bsc1it3:'',
            bsc1it4:'',
            bsc1it5:'',
            bsc1it6:'',
            bsc1it7:'',
            bsc1it8:'',
            bsc1it9:'',
            bsc1it10:'',
            bsc1itt:'',
        
            bsc2it1:'',
            bsc2it2:'',
            bsc2it3:'',
            bsc2it4:'',
            bsc2it5:'',
            bsc2it6:'',
            bsc2it7:'',
            bsc2it8:'',
            bsc2it9:'',
            bsc2it10:'',
            bsc2itt:'',
        
            bsc3it1:'',
            bsc3it2:'',
            bsc3it3:'',
            bsc3it4:'',
            bsc3it5:'',
            bsc3it6:'',
            bsc3it7:'',
            bsc3it8:'',
            bsc3it9:'',
            bsc3it10:'',
            bsc3itt:'',
        
            bsc4it1:'',
            bsc4it2:'',
            bsc4it3:'',
            bsc4it4:'',
            bsc4it5:'',
            bsc4it6:'',
            bsc4it7:'',
            bsc4it8:'',
            bsc4it9:'',
            bsc4it10:'',
            bsc4itt:'',
              
            
            doctorName: '',
            bMri: '',
            
            scale1: [],
            dbDiag: [],
            showMore1: false,
            showMore2: false,
            collapse: false,
            error: [],
            regResp: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.showDiags = this.showDiags.bind(this);
        this.showDiagbsc2it2 = this.showDiagbsc2it2.bind(this);
        this.collapseDiag = this.collapseDiag.bind(this);
        this.checkConnection = this.checkConnection.bind(this);        
        this.dbList = this.dbList.bind(this);
        this.loadData = this.loadData.bind(this);
        this.loadData = this.loadData.bind(this);
        this.checkConnection();
        this.dbList();
        this.loadData();
        this.getSuggestions = this.getSuggestions.bind(this);
        this.getSuggestionValue = this.getSuggestionValue.bind(this);
        this.renderSuggestion = this.renderSuggestion.bind(this);
        this.upperBtnChange = this.upperBtnChange.bind(this);
        
        
        
    }
    onChange(e){
      this.setState({ [e.target.name]: e.target.value });
    }

   showDiags(e){
        e.preventDefault();
        if(this.state.showMore1===false){
          this.setState({
            showMore1: true,
          })
      
        }
       
      }
    showDiagbsc2it2(e){
      
      e.preventDefault();
      if(this.state.showMore1 === true && this.state.showMore2 === false){
        this.setState({
          showMore2: true
        })
      }
    }
    collapseDiag(e){
      e.preventDefault();
      if (this.state.showMore1 === true && this.state.showMore2 === true){
        this.setState({
          showMore1: false,
          showMore2: false,
          collapse: true
        })
      }
    }
   
    onSubmit(e){
      e.preventDefault();
      
      const newPatient = {     
        name: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
        diagnosis: {
            d1: this.state.d1,
            d2: this.state.d2,
        },
        
        doctorName: this.state.doctorName,
        bMri: this.state.bMri,
        scales:{
           scale1:{
              bsc1it1: this.state.bsc1it1,
              bsc1it2: this.state.bsc1it2,
              bsc1it3: this.state.bsc1it3,
              bsc1it4: this.state.bsc1it4,
              bsc1it5: this.state.bsc1it5,
              bsc1it6: this.state.bsc1it6,
              bsc1it7: this.state.bsc1it7,
              bsc1it8: this.state.bsc1it8,
              bsc1it9: this.state.bsc1it9,
              bsc1it10: this.state.bsc1it10,
              bsc1itt: this.state.bsc1itt
            },
          
            scale2:{
              bsc2it1: this.state.bsc2it1,
              bsc2it2: this.state.bsc2it2,
              bsc2it3: this.state.bsc2it3,
              bsc2it4: this.state.bsc2it4,
              bsc2it5: this.state.bsc2it5,
              bsc2it6: this.state.bsc2it6,
              bsc2it7: this.state.bsc2it7,
              bsc2it8: this.state.bsc2it8,
              bsc2it9: this.state.bsc2it9,
              bsc2it10: this.state.bsc2it10,
              bsc2itt: this.state.bsc2itt,
            },
          
            scale3: {
              bsc3it1: this.state.bsc3it1,
              bsc3it2: this.state.bsc3it2,
              bsc3it3: this.state.bsc3it3,
              bsc3it4: this.state.bsc3it4,
              bsc3it5: this.state.bsc3it5,
              bsc3it6: this.state.bsc3it6,
              bsc3it7: this.state.bsc3it7,
              bsc3it8: this.state.bsc3it8,
              bsc3it9: this.state.bsc3it9,
              bsc3it10: this.state.bsc3it10,
              bsc3itt: this.state.bsc3itt,
            },
         
            scale4: {
              bsc4it1: this.state.bsc4it1,
              bsc4it2: this.state.bsc4it2,
              bsc4it3: this.state.bsc4it3,
              bsc4it4: this.state.bsc4it4,
              bsc4it5: this.state.bsc4it5,
              bsc4it6: this.state.bsc4it6,
              bsc4it7: this.state.bsc4it7,
              bsc4it8: this.state.bsc4it8,
              bsc4it9: this.state.bsc4it9,
              bsc4it10: this.state.bsc4it10,
              bsc4itt: this.state.bsc4itt
            }
         

        },
        

      
      }
      trackPromise(register(newPatient).then(res => {
        console.log(newPatient)
        
       if(res.error){
        this.setState({
          error: res.error,
        })
        alert(res.error)
        console.log(res.error)
       }else{
        this.setState({
          regResp: res.status,
          name: '',
          age: '',
          gender: '',
         
          d1:'',
          d2:'',
  
          bsc1it1:'',
          bsc1it2:'',
          bsc1it3:'',
          bsc1it4:'',
          bsc1it5:'',
          bsc1it6:'',
          bsc1it7:'',
          bsc1it8:'',
          bsc1it9:'',
          bsc1it10:'',
          bsc1itt:'',
      
          bsc2it1:'',
          bsc2it2:'',
          bsc2it3:'',
          bsc2it4:'',
          bsc2it5:'',
          bsc2it6:'',
          bsc2it7:'',
          bsc2it8:'',
          bsc2it9:'',
          bsc2it10:'',
          bsc2itt:'',
      
          bsc3it1:'',
          bsc3it2:'',
          bsc3it3:'',
          bsc3it4:'',
          bsc3it5:'',
          bsc3it6:'',
          bsc3it7:'',
          bsc3it8:'',
          bsc3it9:'',
          bsc3it10:'',
          bsc3itt:'',
      
          bsc4it1:'',
          bsc4it2:'',
          bsc4it3:'',
          bsc4it4:'',
          bsc4it5:'',
          bsc4it6:'',
          bsc4it7:'',
          bsc4it8:'',
          bsc4it9:'',
          bsc4it10:'',
          bsc4itt:'',
            
          
          doctorName: '',
          bMri: '',
        })
        alert(res.status);
        console.log(res.status)
       }
         
        
       
      }).catch(e =>{
        console.log('error: ' + e)
      }))
      
    }

    dbList = () =>{
      var self = this;
      trackPromise(
        http.dbList().then(response => {
          if(response){
            self.setState({
              dblist: response
            })
            
            console.log(this.state.dblist)
          }else{
            console.log('cannot get database list')
          }
        })
      )

    }

    checkConnection = () =>{
      var self = this;
      trackPromise(
        http.connection().then(response => {
        if(response.mongoURI){
          var URI = response.mongoURI;
          var URIsplit = URI.split("/");
          var dbN = URIsplit[3];
          // var dbsplit = dbN.split("?");
          // var dbName = dbsplit[0];
          self.setState({
            connection: true,
            db: dbN
          })
          return dbN
        }else{
          self.setState({
            connection: response,
            db: ''
          })
          console.log(response)
          return response
        }
        
       

      }))
    }
    newSwitch = (e) =>{
      this.setState({ [e.target.name]: e.target.value })
    }
    newDbSubmit = (e) =>{
      e.preventDefault();
      var Ndb = this.state.Ndb.toLocaleLowerCase()
      dbSwitch(Ndb).then(response =>{
        this.setState({
          db: response
        })
      })
    }
    onSwitch = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
          console.log(this.state.dbC);
          trackPromise(
            dbSwitch(this.state.dbC).then(response => {
              this.setState({
                db: response
              })
          }))
      })
    }
    
    loadData = () => {
      var self = this;
      trackPromise(
        http.getScale1().then(data => {
          self.setState({scale1: data})
          
      }, err => {
          console.log("error")
    })); 
       
    trackPromise(
      http.getDiag().then(data => {
        self.setState({
          dbDiag: data
        })
      }))
      
    }
    
      getSuggestions = value => {

        const dblist = this.state.dblist;
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : dblist.filter(list =>
          list.toLowerCase().slice(0, inputLength) === inputValue
        );
      };
      getSuggestionValue = suggestion => suggestion;
      renderSuggestion = suggestion => (
        <div>
          {suggestion}
        </div>
      );
      upperBtnChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
      onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: this.getSuggestions(value)
        });
      };
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };
    

    render() {
      
      const { inpValue, suggestions } = this.state;
      const inputProps = {
        placeholder: 'Choose a Database',
        inpValue,
        onChange: this.upperBtnChange
      };
      var {connection} = this.state;
      var {db} = this.state;
      const showMore1 = this.state.showMore1;
      const showMore2 = this.state.showMore2;
      const collapse = this.state.collapse;
      const dbList = this.state.dblist 
      const diagtt = (
        <div>
        <div id="two-ten" className="two-ten form-row">
        <div className="form-group col-sm-4">
          <label htmlFor="d3">Diagnosis 3</label>
          <input name="d3" value={this.state.d3} onChange={this.onChange} type="text" className="form-control" id="d3" placeholder="" />
        </div>
        <div className="form-group col-sm-4">
          <label htmlFor="d4">Diagnosis 4</label>
          <input name="d4" value={this.state.d4} onChange={this.onChange} type="text" className="form-control" id="d4" placeholder="" />
        </div>
        <div className="form-group col-sm-4">
          <label htmlFor="d5">Diagnosis 5</label>
          <input name="d5" value={this.state.d5} onChange={this.onChange} type="text" className="form-control" id="d5" placeholder="" />
        </div>
        <div className="form-group col-sm-4">
          <label htmlFor="d6">Diagnosis 6</label>
          <input name="d6" value={this.state.d6} onChange={this.onChange} type="text" className="form-control" id="d6" placeholder="" />
        </div>
        <div className="form-group col-sm-4">
          <label htmlFor="d7">Diagnosis 7</label>
          <input name="d7" value={this.state.d7} onChange={this.onChange} type="text" className="form-control" id="d7" placeholder="" />
        </div>
        <div className="form-group col-sm-4">
          <label htmlFor="d8">Diagnosis 8</label>
          <input name="d8" value={this.state.d8} onChange={this.onChange} type="text" className="form-control" id="d8" placeholder="" />
        </div>
        <div className="form-group col-sm-4">
          <label htmlFor="d9">Diagnosis 9</label>
          <input name="d9" value={this.state.d9} onChange={this.onChange} type="text" className="form-control" id="d9" placeholder="" />
        </div>
        <div className="form-group col-sm-4">
          <label htmlFor="d10">Diagnosis 10</label>
          <input name="d10" value={this.state.d10} onChange={this.onChange} type="text" className="form-control" id="d10" placeholder="" />
          

        </div>

        </div>
        <hr/>
        <button style={{display: showMore2 ? 'none' : 'inline'}} id="addBtn2" onClick={this.showDiagbsc2it2} className="btn btn-outline-primary addBtn1"><h4>+</h4></button>
</div>
      );

      const diaget = (
      

  <div className="form-row">
    <div className="form-group col-sm-4">
      <label htmlFor="d11">Diagnosis 11</label>
      <input name="d11" value={this.state.d11} onChange={this.onChange} type="text" className="form-control" id="d11" placeholder="" />
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="d12">Diagnosis 12</label>
      <input name="d12" value={this.state.d12} onChange={this.onChange} type="text" className="form-control" id="d12" placeholder="" />
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="d13">Diagnosis 13</label>
      <input name="d13" value={this.state.d13} onChange={this.onChange} type="text" className="form-control" id="d13" placeholder="" />
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="d14">Diagnosis 14</label>
      <input name="d14" value={this.state.d14} onChange={this.onChange} type="text" className="form-control" id="d14" placeholder="" />
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="d15">Diagnosis 15</label>
      <input name="d15" value={this.state.d15} onChange={this.onChange} type="text" className="form-control" id="d15" placeholder="" />
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="d16">Diagnosis 16</label>
      <input name="d16" value={this.state.d16} onChange={this.onChange} type="text" className="form-control" id="d16" placeholder="" />
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="d17">Diagnosis 17</label>
      <input name="d17" value={this.state.d17} onChange={this.onChange} type="text" className="form-control" id="d17" placeholder="" />
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="d18">Diagnosis 18</label>
      <input name="d18" value={this.state.d18} onChange={this.onChange} type="text" className="form-control" id="d18" placeholder="" />
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="d19">Diagnosis 19</label>
      <input name="d19" value={this.state.d19} onChange={this.onChange} type="text" className="form-control" id="d19" placeholder="" />
    </div>
    <div className="form-group col-sm-4">
      <label htmlFor="d20">Diagnosis 20</label>
      <input name="d20" value={this.state.d20} onChange={this.onChange} type="text" className="form-control" id="d20" placeholder="" />
    </div>
    <button style={{display: collapse ? 'none' : 'inline'}}  id="collapseBtn" onClick={this.collapseDiag} className="btn btn-outline-primary addBtn1"><h4>&#8722;</h4></button>

    </div>
        

      )
      var Csuccess= (<div>
    <h1>Connection Successful showing db {db} </h1>
    <div className="container">
    <div className="row">
      <div className="col-sm-5"></div>
    <select className="col-sm-2" id="dbC" name = "dbC" onChange={this.onSwitch} value={this.state.dbC}>
   
      <option value=""> </option>
      {dbList.map(list =>
     
      <option key={list} value={list}> {list} </option>
        )}
        
    </select>
    <div className="col-sm-5"></div>
    </div>
    <form>

  <div className="row">
  <div className="col-sm-5"></div>

  <input className="form-control col-sm-2" type="text" id="Ndb" name="Ndb" onChange={this.newSwitch} value={this.state.Ndb}  aria-describedby="dbname" placeholder="new database"/>
       
        <div className="col-sm-5"></div>

   </div>
   <div className="row">
   <div className="col-sm-5"></div>


   <button className="col-sm-2" type="submit" onClick={this.newDbSubmit} >New DB</button>
   <div className="col-sm-5"></div>
   </div>
   </form>

    </div>
   
    
  
    
      </div>);
      var Cfail = (<div>Connection Failure please run database</div>);
      var {dblist} = this.state;
        return (
            <div className="container regiser">
              {/* <Autosuggest
               suggestions={suggestions}
               
               onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
               onSuggestionsClearRequested={this.onSuggestionsClearRequested}
               getSuggestionValue={this.getSuggestionValue}
               renderSuggestion={this.renderSuggestion}
               inputProps={inputProps}
                /> */}
            <header>
                {connection ? Csuccess : Cfail}
                <h1 className="jumbotron">Submission</h1>
            </header>
           <div className="container">
<form noValidate onSubmit={this.onSubmit} >
      
    <div className="form-row">
        
      <div className="col-sm-6">
        <label htmlFor="name">Patient Name</label>
        
        <input name="name" value={this.state.name} onChange={this.onChange} type="text" className="form-control" id="name" aria-describedby="name" placeholder="name"></input>
 
      </div>
      <div className="col-sm-4">
        <label htmlFor="age">Age</label>
        <input name="age"  value={this.state.age} onChange={this.onChange} type="number"  className="form-control" id="age" />
      </div>
      <div className="form-group">
       <div className="form-row">
      <div className="form-check">
        <input name="gender" checked={this.state.gender === 'male'} value="male"  onChange={this.onChange} className="form-check-input" type="radio" id="male" />
        <label className="form-check-label" htmlFor="gridCheck">
          Male
        </label>
      </div>    
      <div className="form-check">
        <input name="gender" checked={this.state.gender === 'female'} value="female" onChange={this.onChange} className="form-check-input" type="radio" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          Female
        </label>
      </div>
      <div className="form-group col-sm-4">
      <label htmlFor="inputAddresbsc2it2">MRI</label>
      <input type="file" className="" id="inputAddresbsc2it2" placeholder="Apartment, studio, or floor" />
    </div>
      </div>
      </div>
    </div>
    
    <div className="form-row">
        <h1 className=" col-sm-12 jumbotron scaleTitle">Diagnosis</h1>

    </div>
      <div className="form-row">  
    
  
  <div id="d1" className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">Diagnosis 1</span>
  </div>
  <textarea id="d1" name="d1" value={this.state.d1} onChange={this.onChange} type="text" className="form-control" aria-label="With textarea"></textarea>
  </div>
  <div id="d2" className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">Diagnosis 2</span>
  </div>
  <textarea id="d2" name="d2" value={this.state.d2} onChange={this.onChange} type="text" className="form-control" aria-label="With textarea"></textarea>
  </div>
    
    
 
    
   
      
    
    
    </div>
    <hr/>
    
    <div>
    <div className="form-row">
        <h1 className=" col-sm-12 jumbotron scaleTitle">Scales</h1>

    </div>
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item menu-title">
      <a className="nav-link menu-title  active" id="scale1-tab" data-toggle="tab" href="#scale1" role="tab" aria-controls="scale1" aria-selected="true">First Scale</a>
    </li>
    <li className="nav-item menu-title">
      <a className="nav-link menu-title" id="scale2-tab" data-toggle="tab" href="#scale2" role="tab" aria-controls="scale2" aria-selected="false">Second Scale</a>
    </li>
    <li className="nav-item menu-title">
      <a className="nav-link menu-title" id="scale3-tab" data-toggle="tab" href="#scale3" role="tab" aria-controls="scale3" aria-selected="false">Third Scale</a>
    </li>
    <li className="nav-item menu-title">
      <a className="nav-link menu-title" id="scale4-tab" data-toggle="tab" href="#scale4" role="tab" aria-controls="scale4" aria-selected="false">Fourth Scale</a>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="scale1" role="tabpanel" aria-labelledby="scale1-tab">

    
    <div className="form-row scale1">
    
    <div className="card col-sm-12">
      <div className="card-block">
        <h4 className="card-title">Scale 1</h4>
        </div>
      <div className="form-group">
        <label htmlFor="bsc1it1">Item 1</label>
        <input name="bsc1it1" value={this.state.bsc1it1} onChange={this.onChange} type="text" className="form-control" id="bsc1it1" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc1it2">Item 2</label>
        <input name="bsc1it2" value={this.state.bsc1it2} onChange={this.onChange} type="text" className="form-control" id="bsc1it2" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc1it3">Item 3</label>
        <input name="bsc1it3" value={this.state.bsc1it3} onChange={this.onChange} type="text" className="form-control" id="bsc1it3" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc1it4">Item 4</label>
        <input name="bsc1it4" value={this.state.bsc1it4} onChange={this.onChange} type="text" className="form-control" id="bsc1it4" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc1it5">Item 5</label>
        <input name="bsc1it5" value={this.state.bsc1it5} onChange={this.onChange} type="text" className="form-control" id="bsc1it5" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc1it6">Item 6</label>
        <input name="bsc1it6" value={this.state.bsc1it6} onChange={this.onChange} type="text" className="form-control" id="bsc1it6" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc1it7">Item 7</label>
        <input name="bsc1it7" value={this.state.bsc1it7} onChange={this.onChange} type="text" className="form-control" id="bsc1it7" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc1it8">Item 8</label>
        <input name="bsc1it8" value={this.state.bsc1it8} onChange={this.onChange} type="text" className="form-control" id="bsc1it8" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc1it9">Item 9</label>
        <input name="bsc1it9" value={this.state.bsc1it9} onChange={this.onChange} type="text" className="form-control" id="bsc1it9" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc1it10">Item 10</label>
        <input name="bsc1it10" value={this.state.bsc1it10} onChange={this.onChange} type="text" className="form-control" id="bsc1it10" />
      </div>
      </div>
    
      
    </div>
    </div>
    <div className="tab-pane fade" id="scale2" role="tabpanel" aria-labelledby="scale2-tab">
    <div className="form-row scale2">
    
    <div className="card col-sm-12">
      <div className="card-block">
        <h4 className="card-title">Scale 2</h4>
        </div>
      <div className="form-group">
        <label htmlFor="bsc2it1">Item 1</label>
        <input name="bsc2it1" value={this.state.bsc2it1} onChange={this.onChange} type="text" className="form-control" id="bsc2it1" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc2it2">Item 2</label>
        <input name="bsc2it2" value={this.state.bsc2it2} onChange={this.onChange} type="text" className="form-control" id="bsc2it2" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc2it3">Item 3</label>
        <input name="bsc2it3" value={this.state.bsc2it3} onChange={this.onChange} type="text" className="form-control" id="bsc2it3" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc2it4">Item 4</label>
        <input name="bsc2it4" value={this.state.bsc2it4} onChange={this.onChange} type="text" className="form-control" id="bsc2it4" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc2it5">Item 1</label>
        <input name="bsc2it5" value={this.state.bsc2it5} onChange={this.onChange} type="text" className="form-control" id="bsc2it5" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc2it6">Item 2</label>
        <input name="bsc2it6" value={this.state.bsc2it6} onChange={this.onChange} type="text" className="form-control" id="bsc2it6" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc2it7">Item 3</label>
        <input name="bsc2it7" value={this.state.bsc2it7} onChange={this.onChange} type="text" className="form-control" id="bsc2it7" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc2it8">Item 4</label>
        <input name="bsc2it8" value={this.state.bsc2it8} onChange={this.onChange} type="text" className="form-control" id="bsc2it8" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc2it9">Item 4</label>
        <input name="bsc2it9" value={this.state.bsc2it9} onChange={this.onChange} type="text" className="form-control" id="bsc2it9" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc2it10">Item 4</label>
        <input name="bsc2it10" value={this.state.bsc2it10} onChange={this.onChange} type="text" className="form-control" id="bsc2it10" />
      </div>
      </div>
    
      
    </div>



    </div>
    <div className="tab-pane fade" id="scale3" role="tabpanel" aria-labelledby="scale3-tab">

    <div className="form-row scale3">
    
    <div className="card col-sm-12">
      <div className="card-block">
        <h4 className="card-title">Scale 3</h4>
        </div>
      <div className="form-group">
        <label htmlFor="bsc3it1">Item 1</label>
        <input name="bsc3it1" value={this.state.bsc3it1} onChange={this.onChange} type="text" className="form-control" id="bsc3it1" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc3it2">Item 2</label>
        <input name="bsc3it2" value={this.state.bsc3it2} onChange={this.onChange} type="text" className="form-control" id="bsc3it2" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc3it3">Item 3</label>
        <input name="bsc3it3" value={this.state.bsc3it3} onChange={this.onChange} type="text" className="form-control" id="bsc3it3" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc3it4">Item 4</label>
        <input name="bsc3it4" value={this.state.bsc3it4} onChange={this.onChange} type="text" className="form-control" id="bsc3it4" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc3it5">Item 5</label>
        <input name="bsc3it5" value={this.state.bsc3it5} onChange={this.onChange} type="text" className="form-control" id="bsc3it5" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc3it6">Item 6</label>
        <input name="bsc3it6" value={this.state.bsc3it6} onChange={this.onChange} type="text" className="form-control" id="bsc3it6" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc3it7">Item 7</label>
        <input name="bsc3it7" value={this.state.bsc3it7} onChange={this.onChange} type="text" className="form-control" id="bsc3it7" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc3it8">Item 8</label>
        <input name="bsc3it8" value={this.state.bsc3it8} onChange={this.onChange} type="text" className="form-control" id="bsc3it8" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc3it9">Item 9</label>
        <input name="bsc3it9" value={this.state.bsc3it9} onChange={this.onChange} type="text" className="form-control" id="bsc3it9" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc3it10">Item 10</label>
        <input name="bsc3it10" value={this.state.bsc3it10} onChange={this.onChange} type="text" className="form-control" id="bsc3it10" />
      </div>
      </div>
    
      
    </div>


    </div>
    <div className="tab-pane fade" id="scale4" role="tabpanel" aria-labelledby="scale4-tab">

    <div className="form-row scale4">
    
    <div className="card col-sm-12">
      <div className="card-block">
        <h4 className="card-title">Scale 4</h4>
        </div>
      <div className="form-group">
        <label htmlFor="bsc4it1">Item 1</label>
        <input name="bsc4it1" value={this.state.bsc4it1} onChange={this.onChange} type="text" className="form-control" id="bsc4it1" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc4it2">Item 2</label>
        <input name="bsc4it2" value={this.state.bsc4it2} onChange={this.onChange} type="text" className="form-control" id="bsc4it2" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc4it3">Item 3</label>
        <input name="bsc4it3" value={this.state.bsc4it3} onChange={this.onChange} type="text" className="form-control" id="bsc4it3" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc4it4">Item 4</label>
        <input name="bsc4it4" value={this.state.bsc4it4} onChange={this.onChange} type="text" className="form-control" id="bsc4it4" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc4it5">Item 5</label>
        <input name="bsc4it5" value={this.state.bsc4it5} onChange={this.onChange} type="text" className="form-control" id="bsc4it5" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc4it6">Item 6</label>
        <input name="bsc4it6" value={this.state.bsc4it6} onChange={this.onChange} type="text" className="form-control" id="bsc4it6" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc4it7">Item 7</label>
        <input name="bsc4it7" value={this.state.bsc4it7} onChange={this.onChange} type="text" className="form-control" id="bsc4it7" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc4it8">Item 8</label>
        <input name="bsc4it8" value={this.state.bsc4it8} onChange={this.onChange} type="text" className="form-control" id="bsc4it8" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc4it9">Item 9</label>
        <input name="bsc4it9" value={this.state.bsc4it9} onChange={this.onChange} type="text" className="form-control" id="bsc4it9" />
      </div>
      <div className="form-group">
        <label htmlFor="bsc4it10">Item 10</label>
        <input name="bsc4it10" value={this.state.bsc4it10} onChange={this.onChange} type="text" className="form-control" id="bsc4it10" />
      </div>
      </div>
    
      
    </div>

      
    </div>
  </div>
</div>

  <div className="form-row submitBtn">
    
            <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>

    </div>
  </form>
</div>
</div>
        );
    }
}

export default Register;