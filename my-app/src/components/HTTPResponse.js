import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: null
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response);
            this.setState({
                posts: Array.isArray(response.data)
                ? response.data
                : [response.data]
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }
    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h2>Posts:</h2>
                {
                    posts.length ? (
                        posts.map(post => (
                            <div key={post.id}>
                                <h3 class="post-title">{post.id}. {post.title}</h3>
                                <br />
                                <h4>By User ID {post.userId}</h4>
                                <br />
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        this.state.error
                        ? <p>{this.state.error}</p>
                        : <h4>Loading posts ...</h4>
                    )
                }
            </div>
        )
    }
}

export default HTTPRequests