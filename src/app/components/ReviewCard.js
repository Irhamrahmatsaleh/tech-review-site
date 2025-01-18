import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Avatar, Grid } from '@material-ui/core';

const ReviewCard = ({ review }) => {
  return (
    <Card style={{ margin: '20px', padding: '20px' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar alt={review.author} src={review.authorAvatar} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6">{review.author}</Typography>
            <Typography variant="body2" color="textSecondary">
              {review.date}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {review.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
