import React from 'react';
import ReactDOM from 'react-dom';
class Form extends React.Component{
    constructor(){
        super();
        this.state={username:"", age:null,errmsg:"",erms:""};
        
    }
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n==="age"){
            if(v!=""&&!Number(v))
            {
                err=<strong style={{color:'red'}}>invalid,enter number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    usererr=(event)=>
    {
            let n=event.target.name;
            let v=event.target.value;
        let er="";
        if(n==="age"){
            if(v!=""&&!Number(v))
            {
                er=<strong style={{color:'red'}}>invalid,enter number</strong>
            }
        }
        this.setState({erms:er});
        this.setState({[n]:v});
    }
    usererrm=(event)=>
    {
            let n=event.target.name;
            let v=event.target.value;
        let erm="";
        if(n==="age"){
            if(v!=""&&!Number(v))
            {
                erm=<strong style={{color:'red'}}>invalid,enter number</strong>
            }
        }
        this.setState({ermsg:erm});
        this.setState({[n]:v});
    }
    useremsg=(event)=>
    {
            let n=event.target.name;
            let v=event.target.value;
        let ems="";
        if(n==="age"){
            if(v!=""&&!Number(v))
            {
                ems=<strong style={{color:'red'}}>invalid,enter number</strong>
            }
        }
        this.setState({ermg:ems});
        this.setState({[n]:v});
    }
    useralert=(event)=>
    {
        alert("Your Name is " + this.state.username)
    }
    render(){
        return(
            
            <form onSubmit={this.useralert}>
                <div style={{color:"#0DF84B",backgroundColor:"black", textAlign:"center",height:700}}>
                <h1> XMEN CLUB</h1>
                <h2>hello this is {this.state.username}</h2>
                <div>
                Select Sport:<select >
                    <option>Sports</option>
                    <option >Foot Ball</option>
                    <option >Cricket</option>
                    <option >Chess</option>
                    <option >Tennis</option>
                </select><br/><br/>
                Enter Your Name:<input type='text' name='username' onChange={this.uservalue}/> 
                </div> <br/>
                <div >
                Enter Your Age:<input type='date' name='age' onChange={this.uservalue}/>
                </div><br/>
                <div>
                Mobile Number:<input type='text' name='age'onChange={this.uservalue}/><br/>{this.state.errmsg}<br/>
                </div>
                <div>
                Address:<input type='text' name='username'/>
                </div><br/>
                <div>
                Fess:<input type='text' name='age'onChange={this.usererr}/><br/>{this.state.erms}<br/>
                </div>
                <div>
                References:<input type='text' name='age'onChange={this.usererrm}/><br/>{this.state.ermsg}<br/>
                </div>
                <div>
                Total Amount:<input type='text' name='age'onChange={this.useremsg}/><br/>{this.state.ermg}<br/>
                </div>
                <div>
                <input type='submit' name='submit'/>
                </div>
                </div>
            </form>
        )
    }
}ReactDOM.render(<Form/>,document.getElementById('root'));
