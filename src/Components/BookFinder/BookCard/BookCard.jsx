import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

function BookCard({ bookTitle, bookImg, bookPublisher }) {
  return (
    <div>
      <Card style={{margin:"10px"}}>
        <CardActionArea>
          <CardMedia image={bookImg} title={bookTitle} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {bookTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {bookPublisher ? bookPublisher : "no descrep"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default BookCard;
