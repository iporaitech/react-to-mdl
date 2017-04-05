import React from 'react';
import Grid, { Cell } from 'react-to-mdl/lib/grid';
import Spinner from 'react-to-mdl/lib/spinner';

// Get componentHandler as mdl from material.js and use it to create a mdlUpgrade function
import { mdlSetComponentHandler } from 'react-to-mdl/lib';
import { mdl } from "exports-loader?mdl=componentHandler!material-design-lite/material";
const mdlUpgrade = mdlSetComponentHandler(mdl);

// In this case Spinner needs to be upgraded by itself because is not mounted together
// with the other components
const LoadingSpinner = mdlUpgrade(Spinner);

const Page = (props) => {
  return (
    <Grid>
      <Cell desktop={12} className="example-block">
        <h6>
          Spinner
        </h6>
        <LoadingSpinner />
      </Cell>
    </Grid>
  )
}

export default Page;
