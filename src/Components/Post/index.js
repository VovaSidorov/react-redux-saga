import React from "react";

const Post = ({post,key}) =>{
    return (
        <div className={"card"}>
            <div className="card-body">
                <h5 className="card-title" key={key}>Title here{post.title}</h5>
                {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the*/}
                {/*    card's content.</p>*/}
                {/*<a href="#" className="btn btn-primary">Переход куда-нибудь</a>*/}
            </div>
        </div>
    )
}
export default Post;