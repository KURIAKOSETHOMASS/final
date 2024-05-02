
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  margin: 'left',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <Card sx={{ maxWidth: 345 ,position:""  ,marginTop:"140px",marginLeft:"10px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Meals Kerala"
      />
      <CardMedia
        component="img"
        height="194"
        image=""
      />
<CardContent>
        <Typography variant="body2" color="text.secondary">
         Meals <br/>
         price: 100<br/>
         Time:12:00 to 3:00 pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          A meal is different from a snack in that meals are generally larger, more varied, and more filling than snacks. The type of food that is served or consumed at any given time depends on regional customs. Three main meals are often eaten in the morning, early afternoon, and evening in most modern civilizations.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>

{/* 2 */}
    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"-415px", marginLeft:"390px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chicken biriyani"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Chicken Biriyani <br/>
         price: 150 <br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    










{/* 3 */}



    <Card sx={{ maxWidth: 345 ,position:"",marginTop:"-415px",marginLeft:"770px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Beef Biriyani"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://static.vecteezy.com/system/resources/thumbnails/030/496/701/small_2x/aromatic-basmati-biryani-crafted-with-generative-ai-free-photo.jpg"
       
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Beef Biriyani <br/>
         price: 180<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Beef Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>


{/* 4 */}


<Card sx={{ maxWidth: 345 ,position:"",marginTop:"-415px",marginLeft:"1150px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Mutton biriyani"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://png.pngtree.com/png-clipart/20231020/original/pngtree-savory-mutton-biryani-plated-to-perfection-png-image_13388374.png"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Mutton Biriyani <br/>
         price: 180<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

{/* 4 */}



<Card sx={{ maxWidth: 345 ,position:"",marginTop:"20px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Kuzhimandhi"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/oky2o28b1rraeglmyjjy"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Kuzhimandhi <br/>
         price: 170 (quater)<br/>
         price: 300 (half)<br/>
         price: 600 (full)<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
          </Typography>
        </CardContent>
      </Collapse>
    </Card>




<div style={{ display: "flex", justifyContent: "center" }}>

<Card sx={{ maxWidth: 345 ,position:"",marginTop:"-400px",marginLeft:"1150px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Alfam"
        
      />
      <CardMedia
        component="img"
        height="194"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyLIB7Jn7qnQj7QteR2pudeSmAtPyZZDlJQ&usqp=CAU"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Alfam <br/>
         1-5 Kg at Rs 392<br/>
         Time:   11:00 Am to 3:00 Pm
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="ADD TO CART">
  <AddShoppingCartIcon/>
</IconButton>&nbsp;&nbsp;

      <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
      <Button variant="contained">ORDER</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          ALFAM 400MG TABLET is prescribed for the management of pain and swelling. It is also used for treating inflammatory diseases and rheumatoid disorders including juvenile rheumatoid arthritis, mild to moderate pain, fever, dysmenorrhea, gout, ankylosing spondylitis and acute migraine headache.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </div>
    
  );
}
