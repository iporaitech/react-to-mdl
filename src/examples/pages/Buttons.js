import React from 'react';
import Grid, { Cell } from 'react-to-mdl/lib/grid';
import Button from 'react-to-mdl/lib/button';

const Page = (props) => {
  return (
    <Grid>
      <Cell desktop={12} className="example-block">
        <h6>
          Button
        </h6>
        <Button id='button1' type='button' raised primary colored>
          Push me
        </Button>
      </Cell>
    </Grid>
  )
}

export default Page;
