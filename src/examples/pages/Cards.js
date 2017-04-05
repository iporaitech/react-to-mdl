import React from 'react';
import Grid, { Cell } from 'react-to-mdl/lib/grid';
import Button from 'react-to-mdl/lib/button';
import Card, {
  CardActions,
  CardMedia,
  CardSubtitleText,
  CardSupportingText,
  CardTitle,
  CardTitleText,
  CardMenu
} from 'react-to-mdl/lib/card'

const Page = (props) => {
  return (
    <Grid>
      <Cell desktop={12} className="example-block">
        <h6>
          Card (Wide)
        </h6>
        <Card className="demo-card-wide">
          <CardTitle>
            <CardTitleText tag='h2'>Welcome</CardTitleText>
          </CardTitle>
          <CardSupportingText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardSupportingText>
          <CardActions border={true}>
            <Button tag='a' colored rippleEffect>
              Get Started
            </Button>
          </CardActions>
          <CardMenu>
            <Button icon rippleEffect>
              <i className="material-icons">share</i>
            </Button>
          </CardMenu>
        </Card>
      </Cell>
    </Grid>
  )
}

export default Page;
