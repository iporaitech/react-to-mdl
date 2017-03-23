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
import Textfield from 'react-to-mdl/lib/textfield';
import ListSnippets from 'react-to-mdl/lib/list/snippets';

// Get componentHandler as compHandler from material.js
import { compHandler } from "exports-loader?compHandler=componentHandler!material-design-lite/material";
const mdlUpgrade = mdlSetComponentHandler(compHandler);

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
          <Cell desktop={6}>
            <Grid>
              <Cell desktop={6} className="example-block">
                <h6>
                  Spinner
                </h6>
                <Spinner />
              </Cell>

              <Cell desktop={6} className="example-block">
                <h6>
                  Button
                </h6>
                <Button id='button1' type='button' raised primary colored>
                  Push me
                </Button>
              </Cell>
            </Grid>
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

        <Grid>
          <Cell col={2} className="example-block">
            <h6>Simple List</h6>
            { ListSnippets.simpleList }
          </Cell>
          <Cell col={3} className="example-block">
            <h6>List with icons</h6>
            { ListSnippets.withIcons }
          </Cell>
          <Cell col={3} className="example-block">
            <h6>List with avatars and actions</h6>
            { ListSnippets.avatarsAndActions }
          </Cell>
          <Cell col={3} className="example-block">
            <h6>List with avatars and controls</h6>
            { ListSnippets.avatarsAndControls }
          </Cell>
          <Cell col={4} className="example-block">
            <h6>List Two line</h6>
            { ListSnippets.twoLine }
          </Cell>
          <Cell col={7} className="example-block">
            <h6>List Three line</h6>
            { ListSnippets.threeLine }
          </Cell>
        </Grid>
      </LayoutContent>
    </Layout>
  );

}

/** exports **/
export default mdlUpgrade(App);
