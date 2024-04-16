import React from "react";
import Notification from "./Notification";

const reservedNoti = [
    {
        id : 1 ,
        message : "안녕하세요, 만나서 반갑습니다."
    },
    {
        id : 2 ,
        message : "점심식사 하셨나요?"
    },
    {
        id : 3 ,
        message : "좋은 꿈 꾸세요"
    }
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);
        // 선언은 생성자에서 초기화
        this.state = {
            notifications : [],
        };
    };
        // 생명주기에서 생성
        componentDidMount(){
            const {notifications} = this.state;
            timer = setInterval(() => {
                if (notifications.length < reservedNoti.length) {
                    const index = notifications.length;
                    notifications.push(reservedNoti[index]);
                    // 변경은 setState 에서
                    this.setState({
                        notifications: notifications,
                    });
                } else {
                    this.setState({
                        notifications: [],
                    });
                    clearInterval(timer);
                }
            }, 1000);

        }
        
        componentWillUnmount(){
            if(timer){
                clearInterval(timer);
            }
        }

        render(){
            return(
                <div>
                    {this.state.notifications.map((k)=>{
                        return(
                            <Notification 
                                key = {k.id}
                                id = {k.id}
                                message = {k.message}
                            />
                        )
                    })}
                </div>
            );
        }
}
export default NotificationList;