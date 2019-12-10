import React, { Component } from 'react';

import avatar from '../assets/images/avatar.JPG';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Maurício Nogueira Silvério',
          avatar
        },
        date: '10 Dez 2019',
        content: [
          {
            name:
              'Here’s a challenge, try to picture me based on a paragraph: I’m a Brazilian guy wearing a kimono, swimming goggles, running shoes, a guitar, holding a cup of São Paulo Futebol Clube, and a miniature of Morgan from The Walking Dead. Nice meeting you.',
          },
          {
            name:
              'Besides loving sports (including FIFA on Playstation), I’m passionate about entrepreneurship, technology, and education. So, if you hear me sending a WhatsApp audio to someone fiercely criticizing education in Brazil while typing weird codes in a black screen on my Mac, don’t worry, I’m not trying to hack the Brazilian government. I’m just working on improvements for my platform of educational opportunities, iDuk.',
          },
          {
            name:
              'Also, my father is my greatest inspiration, okay? Then, probably you will see me asking myself about “What would my father do in this situation?” if I have a problem to solve. No, I’m not crazy because sometimes I talk to myself out loud, it just helps me to better organize my thoughts. Moreover, in some sense, it will be a way for me to feel closer to my father while living abroad.',
          },
          {
            name:
              'I’m sure we will become great friends when you ask me why I wear the same bracelet on my right wrist every day or when I show you how to escape from a fight by applying the Aikido tenkan-ho or ukemi techniques – trust me, you will wish you had learned it before.',
          },
          {
            name:
              'Despite being a programmer – and using glasses because of high myopia – no, I’m not that typical nerdy geek. I love talking to people and through iDuk, we offer a mentoring program to help talented students be approved for scholarships that can transform their lives just like they transformed mine when I attended The Youth Assembly and Oxford Summer. Because of that, you’ll witness me speaking a lot of Portuguese during weekly iDuk mentoring sessions.',
          },
          {
            name:
              'I’m telling you this because, obviously, I’m also going to teach you Portuguese slang that will help you succeed when we travel to Brazil.',
          },
          {
            name:
              'I’m eager to share new experiences with you! And I hope to learn tons from you!',
          },
        ],
        comments: [
          {
            id: 1,
            author: {
              name: 'Maurício Nogueira Silvério',
              avatar: avatar
            },
            content: 'Hey, rommie! Comments section will only be available after our admission :)'
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="post-list">
        {posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    );
  }
}

export default PostList;
