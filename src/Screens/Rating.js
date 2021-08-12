import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';



export default function HalfRating() {
 

  return (
    <div >
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </div>
  );
}
