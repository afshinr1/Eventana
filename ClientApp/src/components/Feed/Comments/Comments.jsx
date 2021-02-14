import React from 'react'
import {useSelector} from 'react-redux';

function Comments() {
    const allComments = useSelector(state => state.CommentsReducer.comments);
    console.log(allComments);
    return (
        <div>
            
        </div>
    )
}

export default Comments
