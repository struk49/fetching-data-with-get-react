import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             apiResponse: null
        }
    }
    
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello world!',
                body: 'It works!',
                userId: 123,
            }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }
    render() {
        const {apiResponse} = this.state;
        return (
            <div>
                <button class='btn' onClick={this.postToApi}>
                    Create Post
                </button>
                {
                    apiResponse
                    ? (<div>
                        <h1>{apiResponse.title}</h1>
                        <br></br>
                        <p>post id: {apiResponse.id}</p>
                        <br></br>
                        <p>{apiResponse.body}</p>
                        <br></br>
                        <p>user id: {apiResponse.userId}</p>
                    </div>)
                    : (<p>please click the button above</p>)
                }
            </div>
        )
    }
}

export default HTTPPost