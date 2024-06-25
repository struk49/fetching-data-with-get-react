import React, { Component } from 'react'
import axios from 'axios'

export class HTTPResponse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            post: []
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                posts: response.data
        })
        })
    }
  render() {
    return (
      <div>
        <h2>POSTS</h2>
        {JSON.stringify(this.state.posts)}
      </div>
    )
  }
}

export default HTTPResponse