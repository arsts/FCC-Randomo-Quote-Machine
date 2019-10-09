import React, { Component } from 'react';
import {requestQuotes, generateColor} from '../../actions';
import './QuoteBox.css';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
 return {
   isPending: state.quotes.isPending,
   quotes: state.quotes.quotes,
   error: state.quotes.error,
   newColor: state.color.newColor
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestQuotes: () => dispatch(requestQuotes()),
    onRequestColor: () => dispatch(generateColor())
  }
}


class QuoteBox extends Component {
  componentDidMount() {
    
    this.props.onRequestQuotes()
    
  }
  
  render() {
    const {quote} = this.props.quotes;
    document.body.style.background = this.props.newColor;
    console.log(document.body.style.background);
    
    return (
      <div id="quotebox">
        
        <div className="quote-text" style={{color: this.props.newColor}}>
            <i className="fa fa-quote-left"></i>
            <span>{quote}</span>
          </div>
        <div className="quote-author" style={{color: this.props.newColor}}>
            <span id="test"> - Kanye West</span>  
          </div>
        
        <div className="buttons" >
          <div className="social">
            <div className="tweet-quote-container">
              <a id="tweet-quote" href="?" style={{background: this.props.newColor}}><i className="fab fa-twitter"></i></a>  
            </div>
            <a id="tumblr-quote" href="?" style={{background: this.props.newColor}}><i className="fab fa-tumblr"></i></a>
          </div>
            <button className="new-quote" 
            onClick={this.props.onRequestQuotes}
            onChange={this.props.onRequestColor}
             style={{background: this.props.newColor}}>New Quote</button>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);

