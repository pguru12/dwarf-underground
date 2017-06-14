import React, { Component } from 'react';

class Links extends Component{
  constructor(){
    super()

    this.state = {
      showComments: false
    }

    this.toggleComments=this.toggleComments.bind(this)
  }

  toggleComments(ev){
    ev.preventDefault()
   // console.log('TOGGLED')
   this.setState({ showComments: !this.state.showComments})
  // console.log(this.state)
  }

    render(){
        return (
          <div>
            <div className="article-links">
          <a className="article-link" href="#" onClick={this.toggleComments}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
          <a className="article-link" href="#">
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
        </div>
        {this.state.showComments ? <p>Comments!</p> : null}
        </div>
        )
    }
}
export default Links