import React from 'react';
import * as Scroll from 'react-scroll';
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
      },
    }, () => {
      this.scrollToTop();
    });
    console.log('clicked card');
  };

  scrollToElement = (elementName) => {
    Scroll.scroller.scrollTo(elementName, {
      duration: 750,
      delay: 50,
      smooth: true,
    });
    console.log('scroll to', elementName);
  };

  scrollToTop = () => {
    Scroll.animateScroll.scrollToTop({
      duration: 750,
      delay: 0,
      smooth: true,
    });
    setTimeout(() => {
      console.log(document.getElementById('cardContainer').scrollTop);
      //document.getElementById('cardContainer').scrollTop=0;
    }, 700);
    console.log('scroll to top');
  };

  render() {
    return (
      <div style={{height: '100%'}}>
      <div id={'cardContainer'} onScroll={this._onScrollCard}>
        <Scroll.Element
          name={'mainCard'}
          className={'scrollElement'}
        >
          <ZoomingCard
            cardTransform={this.state.cardTransform}
            cardImageTransform={this.state.cardImageTransform}
            onClickCard={() => this._onClickCard()}
            cardImages={[IMG_BW_BG, IMG_BG]}
          />
        </Scroll.Element>
      </div>
      <Test/>
      </div>
    );
  }
}

export default MainPage;
