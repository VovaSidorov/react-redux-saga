import React from "react";
import Post from "../Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../../redux/actions";

const FetchPost = () =>{
    const dispatch = useDispatch()
    const posts = useSelector(state=>state.posts.fetchedPosts)
    const loader = useSelector(state=>state.app.loading)
    if(loader){
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    if (!posts.length){
        return (
            <div>
                <button className={'btn btn-primary'} onClick={()=>dispatch(fetchPost())}>зарузить пост</button>
            </div>
        )
    }
    return posts.map(post=><Post post={post} key={post.id}/>)

}
export default FetchPost;