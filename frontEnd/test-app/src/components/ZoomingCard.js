import React from 'react';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IMG_BG from '../assets/images/gvlng.jpg';
import IMG_BW_BG from '../assets/images/gvlng_bw.jpg';
import '../styles/ZoomingCard.css';

class ZoomingCard extends React.Component {

  componentDidMount() {
    console.log('component mounted');
  };

  componentWillUnmount() {
    console.log('component unmounted');
  };

  _onClickCard = () => {
    console.log('clicked card')
//    document.getElementById('container').scrollTop = 0;
    this.props.onClickCard();
  };

  render() {
    const cardStyle = {
      transform: this.props.cardTransform.transform,
    };

    return (
      <div style={{height: '100%'}}>
        <Card className={'card'} style={cardStyle}>
          <CardMedia
            className={'cardMedia'}
            onClick={this._onClickCard}
            image={this.props.cardTransform.cardImageTransform ? IMG_BW_BG : IMG_BG}
            style={{
            }}
          >
            <IconButton>
              <MoreVertIcon
              />
            </IconButton>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className={'cardActionContent'}>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ZoomingCard;
