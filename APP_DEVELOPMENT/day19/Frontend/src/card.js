import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom'
import '../src/card.css'

export default function ImgMediaCard() {
  return (
    <>
      <div class="row1">
        <div class="column1" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Sofa"
              height="200"
              image="https://images.pexels.com/photos/2955703/pexels-photo-2955703.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lion
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India.
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Buy</Button> */}
              <Button id='cartbtn' size="small" component={Link} to="/Lion" >view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column1" >
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              alt="bed"
              height="200"
              image="https://images.pexels.com/photos/1926338/pexels-photo-1926338.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tiger
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera.
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Buy</Button> */}
              <Button size="small" component={Link} to="/Tiger" >view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column1" >
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              alt="chair"
              height="200"
              image="https://media.istockphoto.com/id/489589897/photo/black-panther.jpg?b=1&s=612x612&w=0&k=20&c=DLkiIo6X5HGP29IJh2A2PLLDEUUKkDVKwm8Q_KlE-SA="
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Black Panther
              </Typography>
              <Typography variant="body2" color="text.secondary">
              A black panther is the melanistic colour variant of the leopard (Panthera pardus) and the jaguar.              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Buy</Button> */}
              <Button size="small" component={Link} to="/Blackpanther">view more</Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <br />
      <div class="row1">
        <div class="column1" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Shelves"
              height="200"
              image="https://images.pexels.com/photos/18362412/pexels-photo-18362412/free-photo-of-four-swans-in-the-river.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Birds
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Birds are a group of warm-blooded vertebrates constituting the class Aves,characterised by feathers, toothless beaked jaws etc.,             </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Buy</Button> */}
              <Button size="small" component={Link} to="/Birds">view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column1" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Dinning Table"
              height="200"
              image="https://images.pexels.com/photos/7683674/pexels-photo-7683674.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Reptiles
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The study of the traditional reptile orders, customarily in combination with the study of modern amphibians, is called herpetology.              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Buy</Button> */}
              <Button size="small" component={Link} to="/Reptiles">view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column1" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Tables"
              height="200"
              image="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fish
              </Typography>
              <Typography variant="body2" color="text.secondary">
              A fish is an aquatic, craniate, gill-bearing animal that lacks limbs with digits. Most fish are ectothermic ("cold-blooded").              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Buy</Button> */}
              <Button size="small" component={Link} to="/Fish">view more</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}