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

  render() {
    const cardStyle = {
      transform: this.props.cardTransform.transform,
    };

    return (
      <div
        style={{height: '100%'}}
        onClick={this.props.onClickCard}
      >
        <Card className={'card'} style={cardStyle}>
          <CardMedia
            className={'cardMedia'}
            image={this.props.cardTransform.cardImageTransform ? this.props.cardImages[0] : this.props.cardImages[1]}
            style={{
            }}
          >
            <div className={'cardContent'}>
              <IconButton>
                <MoreVertIcon
                />
              </IconButton>
            </div>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h1">
              Gvling
            </Typography>
            <Typography component="p">
              <a href={'https://pixiv.me/gvling'}>More</a>
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
