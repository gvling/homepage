import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IMG_BG from '../assets/images/gvlng.jpg';
import IMG_BW_BG from '../assets/images/gvlng_bw.jpg';
import '../styles/ZoomingCard.css';

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class ZoomingCard extends React.Component {

  state = {
    expanded: false,
  };

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

  _onClickExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    const cardStyle = {
      expanded: false,
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
            <Typography component="p">
              hogehoge
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this._onClickExpand}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                fugafuga
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ZoomingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ZoomingCard);
