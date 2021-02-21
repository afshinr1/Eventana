import React from 'react'
import {useSelector} from 'react-redux';
import Comment from './Comment';
import {Box} from '@material-ui/core';
import {useStyles} from './Comments.styles';

function Comments() {
    const classes = useStyles();
    const allComments = useSelector(state => state.CommentsReducer.comments);
    console.log(allComments);
    
    const comments = allComments.map(comment => <Comment key={comment.id} comment={comment} />);
    return (
        <Box variant='div' className='JJajaj'>
            {comments}
        </Box>
    )
}

export default Comments
