import React from 'react';
import { mdlSetComponentHandler } from 'react-to-mdl/lib';
import Layout, {
  LayoutHeader,
  LayoutIcon,
  LayoutHeaderRow,
  LayoutTitle,
  LayoutSpacer,
  Navigation,
  NavigationLink,
  LayoutDrawer,
  LayoutContent
} from 'react-to-mdl/lib/layout';
import Spinner from 'react-to-mdl/lib/spinner';
import Button from 'react-to-mdl/lib/button';
import Grid, { Cell } from 'react-to-mdl/lib/grid';
import Card, {
  CardActions,
  CardMedia,
  CardSubtitleText,
  CardSupportingText,
  CardTitle,
  CardTitleText,
  CardMenu
} from 'react-to-mdl/lib/card'

// Get componentHandler as mdl from material.js
import { mdl } from "exports-loader?mdl=componentHandler!material-design-lite/material";
const mdlUpgrade = mdlSetComponentHandler(mdl);

// Styles for App
import './app.scss';

const App = (props) => {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutIcon />
        <LayoutHeaderRow>
          <LayoutTitle>react-to-mdl examples</LayoutTitle>
          <LayoutSpacer />
          <Navigation>
            <NavigationLink to="/">Home</NavigationLink>
          </Navigation>
        </LayoutHeaderRow>
      </LayoutHeader>

      <LayoutDrawer>
        <Navigation>
          <NavigationLink href="/">Home</NavigationLink>
        </Navigation>
      </LayoutDrawer>

      <LayoutContent>
        <p className="grid-cell-description">
          Examples are shown in a Cells inside Grids components
        </p>
        <Grid>
          <Cell desktop={2} className="example-block">
            <h6>
              Spinner
            </h6>
            <Spinner />
          </Cell>

          <Cell desktop={2} className="example-block">
            <h6>
              Button
            </h6>
            <Button id='button1' type='button' raised primary colored>
              Push me
            </Button>
          </Cell>

          <Cell desktop={6} className="example-block">
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
      </LayoutContent>
    </Layout>
  );

}

/** exports **/
export default mdlUpgrade(App);
