import React, { Component } from 'react';

class QuoteBox extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Quote: alalal!</p>
          <i>Цитаты великих людей</i>
        </div>
      </div>
    );
  }
}

export default QuoteBox;

const blob = {
  "quotes": [
    {
      "quote": "Life isn’t about getting and having, it’s about giving and being.",
      "author": "Kevin Kruse"
    },
    {
      "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Strive not to be a success, but rather to be of value.",
      "author": "Albert Einstein"
    }
  ]
} 