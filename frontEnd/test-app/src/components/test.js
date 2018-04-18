import React from 'react';
import { render } from 'react-dom';
import * as Scroll from 'react-scroll'

class Test extends React.Component {

  componentDidMount() {

    Scroll.Events.scrollEvent.register('begin', () => {
      console.log("begin", arguments);
    });

    Scroll.Events.scrollEvent.register('end', () => {
      console.log("end", arguments);
    });

  }

  scrollTo = (elementName) => {
    Scroll.scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: true,
    })
  }

  componentWillUnmount() {
    Scroll.Events.scrollEvent.remove('begin');
    Scroll.Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
        <a className="test1" onClick={() => this.scrollTo('scrollElement')} >Scroll to</a>
        <div>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element
            name="scrollElement"
            onClick={() => this.scrollTo('scrollElement')}
          >
            Scroll to element
        </Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
          <Scroll.Element>t</Scroll.Element>
        </div>
      </div>
    );
  }
};

export default Test;


