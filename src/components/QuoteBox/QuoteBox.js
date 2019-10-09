import React, { Component } from 'react';
import {requestQuotes} from '../../actions';
import './QuoteBox.css';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
 return {
   isPending: state.isPending,
   quotes: state.quotes,
   error: state.error,
   colors: state.colors,
   color: function(){return this.colors[Math.floor(Math.random() * state.colors.length)]}
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestQuotes: () => dispatch(requestQuotes())
  }
}


class QuoteBox extends Component {
  componentDidMount() {
    // console.log(this.props.quotes);
    this.props.onRequestQuotes()
    
  }

  
  render() {
    const {quote} = this.props.quotes;
    let textColor = { color: this.props.color };
    console.log(textColor);
    
    let backgroundColor = { backgroundColor: this.props.color };
    
    // console.log(this.props.color());
    
    return (
      <div id="quotebox">
        
        <div className="quote-text" style={textColor}>
            <i className="fa fa-quote-left"></i>
            <span>{quote}</span>
          </div>
        <div className="quote-author" style={textColor}>
            <span id="test"> - Kanye West</span>  
          </div>
        
        <div className="buttons" >
          <div className="social">
            <div className="tweet-quote-container">
            <a id="tweet-quote" href="?" style={backgroundColor}><i className="fab fa-twitter"></i></a>  
            </div>
            <a id="tumblr-quote" href="?" style={backgroundColor}><i className="fab fa-tumblr"></i></a>
          </div>
           <button className="new-quote" onClick={this.props.onRequestQuotes} style={backgroundColor}>New Quote</button>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);

