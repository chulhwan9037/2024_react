import React from "react";
import Comment from "./Comment";

// 나중에는 DB 처리
const comments = [
    {
        name : "홍길동",
        comment : "방가 방가"
    },
    {
        name : "둘리",
        comment : "호이 호이"
    },
    {
        name : "도우너",
        comment : "깐따삐야"
    },
    {
        name : "희동이",
        comment : "응~~애"
    }
];

function CommentList(props) {
    return (
        <div>
            {   // for문을 쓸 수 없어서 map 사용
                comments.map((k)=>{
                    return(
                        <Comment name={k.name} comment={k.comment} />
                    );
                })
            }
        </div>
    );
}
export default CommentList;