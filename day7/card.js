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
              image="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=600"
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
              image="https://images.pexels.com/photos/814898/pexels-photo-814898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tigers
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
              image="https://th.bing.com/th/id/R.42af05282ee18c71dde21f69bf7c0879?rik=k3R32rlKKADt6Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f-oOUS6JPJ2pw%2fULUHMcbxZFI%2fAAAAAAAALWA%2f73AUGj4tXvU%2fs1600%2fblack%2bpanther%2b(8).jpg&ehk=luwloO3qx0blpTOiTe4VSjmWse7QrrYP6cOb5MadgAM%3d&risl=&pid=ImgRaw&r=0"
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
              image="https://images.pexels.com/photos/677974/pexels-photo-677974.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rhinoceros
              </Typography>
              <Typography variant="body2" color="text.secondary">
              A rhinoceros(rhīnókerōs)  rhinoceros it can also refer to a member of any of the extinct species of the superfamily Rhinocerotoidea.              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Buy</Button> */}
              <Button size="small" component={Link} to="/Rhinoceros">view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column1" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Dinning Table"
              height="200"
              image="https://images.pexels.com/photos/2382783/pexels-photo-2382783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Deer
              </Typography>
              <Typography variant="body2" color="text.secondary">
A deer (pl: deer), Male deer of all species (except the water deer), as well as female reindeer, grow and shed new antlers each year.              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Buy</Button> */}
              <Button size="small" component={Link} to="/Deer">view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column1" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Tables"
              height="200"
              image="https://images.pexels.com/photos/86413/elephant-africa-okavango-delta-animal-86413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Elephant
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Elephants are the largest living land animals. Three living species are African bush, African forest, Asian elephant.              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Buy</Button> */}
              <Button size="small" component={Link} to="/Deer">view more</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}