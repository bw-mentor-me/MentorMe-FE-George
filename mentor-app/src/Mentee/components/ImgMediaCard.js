import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const CommentInput = styled.input`
  border: 1px solid gray;
  max-width: 345px;
  padding: 10px 1px;
`;

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.question.user.username}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.question.question}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.question.user.industrytype}
          </Typography>
          <Button size="small" color="primary">
            Delete
          </Button>
        </CardContent>
      </CardActionArea>

      {/* <Button size="small" color="primary">
          Add Comment
        </Button> */}
      <form>
        <CommentInput type="text" placeholder="Add a comment..." />
      </form>
    </Card>
  );
}
