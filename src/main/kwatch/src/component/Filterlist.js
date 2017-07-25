import React, { Component }from 'react'

class Filterlist extends Component  {

    filterupdate(){ 
        const val = this.myValue.value; 
        if(val.includes(":")) {


            this.props.filterupdate(val)
        }
    }

    render(){
        console.log("sas", this.props.filtertext)
        return (

            <header> 
                <form> 
                    <input type ="test"
                           ref ={(value)=> this.myValue = value}
                           placeholder ="type Row:filter"  onChange={this.filterupdate.bind(this)} />  
                </form>
             </header>

        )
    }
}
export default Filterlist;