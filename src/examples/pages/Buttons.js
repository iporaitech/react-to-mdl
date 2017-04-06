import React from 'react';
import { Link } from 'react-router';
import Grid, { Cell } from 'react-to-mdl/lib/grid';
import Icon from 'react-to-mdl/lib/Icon';
import Button from 'react-to-mdl/lib/button';


const Page = (props) => {
  return (
    <Grid>
      <Cell desktop={6} className="example-block">
        <h6>
          Button
        </h6>
        <Button id='button1' raised primary colored>
          Push me
        </Button>
      </Cell>
      <Cell desktop={6} className="example-block">
        <h6>
          React Router's Link styled as a button
        </h6>
        <Button tag={Link} to="/" id='button2' icon>
          <Icon>home</Icon>
        </Button>
      </Cell>
    </Grid>
  )
}

export default Page;
