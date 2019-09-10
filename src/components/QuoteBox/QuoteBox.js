import React, { Component } from 'react';
import {requestQuotes} from '../../actions';
import './QuoteBox.css';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
 return {
   isPending: state.isPending,
   quotes: state.quotes,
   error: state.error
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestQuotes: () => dispatch(requestQuotes())
  }
}


class QuoteBox extends Component {
  componentDidMount() {
    console.log(this.props.quotes);
    this.props.onRequestQuotes()
    
  }

  
  render() {
    const {quote} = this.props.quotes;
    return (
      <div className="quotebox">
        <div>
          <p>{quote}</p>
          <i> - Kanye West</i>
        </div>
        <div className="buttons">
          <i className="fa fa-quote-left"></i>
          <a href="?">twitter</a>
          <a href="?"></a>
           <button className="newquote" onClick={this.props.onRequestQuotes}>New Quote</button>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);

