import { Box, Button } from "@mui/material";
import React from "react";

class Count extends React.Component{
    constructor(props){
        super(props);
        // 초기값
        this.state = {cnt : 5}
    }

    increment(){
        // setState 변경시
        this.setState({
            cnt : this.state.cnt + 1 
        })
    }
    decrement(){
        // setState 변경시
        this.setState({
            cnt : this.state.cnt - 1 
        })
    }

    render(){
        return(
            <div>
                <Button variant="contained" color="primary" size="large" onClick={this.increment.bind(this)}>+</Button>
                <Box component='span' m={5} >{this.state.cnt}</Box>
                <Button variant="contained" color="primary" size="large" onClick={this.decrement.bind(this)}>-</Button>
            </div>
        )
    }
}
export default Count;