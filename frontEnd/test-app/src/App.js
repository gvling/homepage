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
import IMG_BG from './assets/images/gvlng.jpg';
import './App.css';

const styles = theme => ({
  media: {
    height: '100%',
  },
  actions: {
    display: 'flex',
  },
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

class RecipeReviewCard extends React.Component {
  state = {
    expanded: false,
    cardTransform: 'none'
  };

  componentDidMount() {
    console.log('component mounted');
  };

  componentWillUnmount() {
    console.log('component unmounted');
  };

  _onScrollCard = () => {
    const scrolled = document.getElementById('container').scrollTop;
    if(scrolled > 1) {
      this.setState({
        cardTransform: 'scale(0.9, 0.9)',
      });
    }
  };

  _onClickCard = () => {
    console.log('clicked card')
//    document.getElementById('container').scrollTop = 0;
    this.setState({ cardTransform: 'scale(1, 1)' });
  };

  _onClickExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    const cardStyle = {
      height: '100%',
      width: '100%',
      expanded: false,
      transform: this.state.cardTransform,
      transition: 'transform 0.5s',
    };

    return (
      <div style={{height: '100%'}}>
        <div id={'container'} onScroll={this._onScrollCard}>
          <Card class={'card'} style={cardStyle}>
            <CardMedia
              className={classes.media}
              image={IMG_BG}
              title="Contemplative Reptile"
              onClick={this._onClickCard}
            >
              <IconButton>
                <MoreVertIcon />
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

          <Card class={'card'} style={cardStyle}>
            <CardMedia
              className={classes.media}
              image={IMG_BG}
              title="Contemplative Reptile"
              onClick={this._onClickCard}
            >
              <IconButton>
                <MoreVertIcon />
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
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
