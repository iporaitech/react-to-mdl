import React from 'react';
import { mdlUpgrade } from 'react-to-mdl/lib';
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

// Styles for App
import './app.scss';

class App extends React.Component {
  render() {
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
            <Cell desktop={1} className="example-block">
              <h6>
                Spinner
              </h6>
              <Spinner />
            </Cell>

            <Cell desktop={1} className="example-block">
              <h6>
                Button
              </h6>
              <Button type='button' raised primary colored>
                Push me
              </Button>
            </Cell>
          </Grid>

        </LayoutContent>
      </Layout>
    );
  }
}

/** exports **/
export default mdlUpgrade(App);
