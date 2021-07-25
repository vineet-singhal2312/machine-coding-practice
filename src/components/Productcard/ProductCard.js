import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProductCard({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} id="product-card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.productImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ₹{product.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.productName}{" "}
            <lable className="category-tag">({product.category})</lable>
          </Typography>
          <Typography gutterBottom variant="h6" component="h5">
            SIZE - {product.size}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="card-btn-div">
        <CardActions>
          <Button size="small" color="primary">
            ADD to Cart
          </Button>
          <Button size="small" color="primary">
            Add to Wishlist
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
