import React from 'react';
import Grid, { Cell } from 'react-to-mdl/lib/grid';
import Textfield from 'react-to-mdl/lib/textfield';

const Page = (props) => {
  return (
    <Grid>
      <Cell desktop={12} className="example-block">
        <h6>
          Textfield
        </h6>
        <Textfield id="email"
          labelText="Email"
          floatingLabel={true}
        />
      </Cell>
    </Grid>
  )
}

export default Page;
