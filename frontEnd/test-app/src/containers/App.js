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
    Scroll.Events.scrollEvent.register('begin', () => {
      console.log("begin", arguments);
    });
    Scroll.Events.scrollEvent.register('end', () => {
      console.log("end", arguments);
    });
    console.log('component mounted');
  };

  componentWillUnmount() {
    Scroll.Events.scrollEvent.remove('begin');
    Scroll.Events.scrollEvent.remove('end');
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
    });
    // event.target.parentNode.parentNode.parentNode.scrollTop = 0;
    //document.getElementById('container').scrollTop = 0;
    console.log('clicked card');
  };

  scrollToElement = (elementName) => {
    Scroll.scroller.scrollTo(elementName, {
      duration: 750,
      delay: 0,
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
    console.log('scroll to top');
  };

  render() {
    return (
      <div  onScroll={this._onScrollCard}>
      <Test/>
        <Scroll.Element
          name={'mainCard'}
          className={'scrollElement'}
          onClick={() => this.scrollToTop('mainCard')}
        >
          <ZoomingCard
            cardTransform={this.state.cardTransform}
            cardImageTransform={this.state.cardImageTransform}
            onClickCard={() => this._onClickCard()}
            cardImages={[IMG_BW_BG, IMG_BG]}
          />
        </Scroll.Element>
      </div>
    );
  }
}

export default MainPage;
