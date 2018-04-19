import React from 'react';
import '../styles/App.css';
import ZoomingCard from '../components/ZoomingCard';
import Test from '../components/test';

import IMG_BG from '../assets/images/gvlng.jpg';
import IMG_BW_BG from '../assets/images/gvlng_bw.jpg';

class MainPage extends React.Component {

  state = {
    cardTransform: {
      transfor: 'none',
      cardImageTransform: false,
    },
    preScrollPosition: 0,
  };

  componentDidMount() {
    console.log('component mounted');
  };

  componentWillUnmount() {
    console.log('component unmounted');
  };

  _onScrollCard = (event) => {
    const scrolleDirection = this.state.preScrollPosition - event.currentTarget.scrollTop;
    if( scrolleDirection > 0 ) {
      // scroll direction TOP
      this.setState({
        preScrollPosition: event.currentTarget.scrollTop,
      });
    }else{
      // scroll direction BOTTOM
      this.setState({
        cardTransform: {
          transform: 'scale(0.9)',
          cardImageTransform: true,
        },
        preScrollPosition: event.currentTarget.scrollTop,
      });
    }
    // reset card transformation
    if(event.currentTarget.scrollTop === 0) {
      this.setState({
        cardTransform: {
          transfor: 'none',
          cardImageTransform: false,
        },
      });
    }
  };

  _onClickCard = (event) => {
    this.setState({
      cardTransform: {
        transfor: 'none',
        cardImageTransform: false,
      }
    });
    console.log('clicked card');
  };

  render() {
    return (
      <div id={'cardContainer'} onScroll={this._onScrollCard}>
        <ZoomingCard
          cardTransform={this.state.cardTransform}
          cardImageTransform={this.state.cardImageTransform}
          onClickCard={() => this._onClickCard()}
          cardImages={[IMG_BW_BG, IMG_BG]}
        />
      </div>
    );
  }
}

export default MainPage;
