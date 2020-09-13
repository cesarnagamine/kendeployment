import React from 'react';
import axios from "axios";


const Body = props => (
  <div>
    <h4>{props.body.name}:</h4> 
  <p>{props.body.message}</p>
  <br/>
  </div>
)


class Landing extends React.Component {
    
  state = {
    comments: []
  };
  
  
  mongoData() {
    return this.state.comments.map(currentcomments => {
      return <Body body={currentcomments}  key={currentcomments._id} />;
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3001/posts/')
      .then(response => {
        this.setState({ comments: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    
    return (
      <div id="wrapper">        
            { this.mongoData() }          
      </div>
    );
  }
}

export default Landing;
