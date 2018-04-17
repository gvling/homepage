import React from 'react';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../styles/ZoomingCard.css';

class ZoomingCard extends React.Component {

  componentDidMount() {
    console.log('component mounted');
  };

  componentWillUnmount() {
    console.log('component unmounted');
  };

  _onClickCard = (event) => {
    console.log('clicked card')
//    document.getElementById('container').scrollTop = 0;
    this.props.onClickCard(event);
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
            image={this.props.cardTransform.cardImageTransform ? this.props.cardImages[0] : this.props.cardImages[1]}
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
