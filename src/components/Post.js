import React from 'react';

import Emoji from './Emoji';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} alt="author-avatar"/>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment" >
          <img className="avatar" src={comment.author.avatar} alt="comment-author-avatar"/>
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
            <Emoji className="emoji" symbol={comment.emoji} /> 
            <Emoji symbol={comment.emoji2} />
          </p>
        </div>
      ))}
    </div>
  );
}

function Post({ author, date, content, comments }) {
    return (
      <div className="post-container">
        <PostHeader author={author} date={date} />
        {content.map(fact => <p className="post-content">{fact.name}</p>)} 
        <Emoji symbol="👊🏻" label="punch" />
        <PostComments comments={comments} />
      </div>
    );
}

export default Post;
