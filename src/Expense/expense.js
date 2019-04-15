import React,{Component} from 'react';

class expense extends Component{
    render(){
        return(
            <>
             <div>Hello World !</div>
            <input type="text" name="amount" placeholder="Expense amount"/>
            <br/>
            <input type="text" name="description" placeholder="description "/>
            <br/>
            <input type="submit" onClick={this.callApi()} value="Add" />
            </>
        )
    };


    callApi(){
        console.log("this");
    }

}

export default expense;