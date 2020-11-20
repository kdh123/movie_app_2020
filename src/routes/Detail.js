import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
        console.log(location.state);
    }
    
    render(){
        const {location} = this.props;
        if(location.state){ //location.state이 존재한다면
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
        
    }
}


/* 
function Detail({location}){
    console.log(location);
    return <span>hello</span>
}
 */
export default Detail;