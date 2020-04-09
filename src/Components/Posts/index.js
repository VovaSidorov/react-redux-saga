import React from "react";
import Post from "../Post";
import {connect} from "react-redux";


const Posts = ({syncPosts})=>{
    console.log(syncPosts);
    if (!syncPosts.length){
        return <div>постов еще нет</div>
    }
    return syncPosts.map(post=><Post post={post} key={post}/>)
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {
        syncPosts: state.posts.posts
    }
}

const mapDispatchToProps=()=>{

}
export default connect(mapStateToProps,null)(Posts);

