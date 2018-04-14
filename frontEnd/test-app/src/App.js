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
import Zoom from 'material-ui/transitions/Zoom';
import IMG_BG from './assets/images/gvlng.jpg';

const styles = theme => ({
  card: {
    maxWidth: '100%',
    height: '100%',
  },
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
  state = { expanded: false,
            zoomIn: true,
  };

  componentDidMount() {
    console.log('component mounted');
  };

  componentWillUnmount() {
    var element = document.getElementById('container');
  };

  handleScroll = () => {
    var scrolly = document.getElementById('container').scrollTop;
    if(scrolly > 1000) {
      this.setState({zoomIn: false});
    }
  };
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{height: '100%'}}>
        <Zoom in={this.state.zoomIn} timeout={1000}>
          <Card className={classes.card} id={'container'} style={{overflowY: 'scroll'}} onScroll={this.handleScroll}>
            <CardMedia
              className={classes.media}
              image={IMG_BG}
              title="Contemplative Reptile"
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
                onClick={this.handleExpandClick}
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
        </Zoom>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
