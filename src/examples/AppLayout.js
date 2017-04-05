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


// Get componentHandler as compHandler from material.js
import { compHandler } from "exports-loader?compHandler=componentHandler!material-design-lite/material";
const mdlUpgrade = mdlSetComponentHandler(compHandler);

// Styles for App
import './app.scss';

const App = (props) => {
  const { children } = props;

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
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/buttons">Buttons</NavigationLink>
          <NavigationLink to="/cards">Cards</NavigationLink>
          <NavigationLink to="/lists">Lists</NavigationLink>
          <NavigationLink to="/loading">Loading</NavigationLink>
          <NavigationLink to="/textfields">Text fields</NavigationLink>
        </Navigation>
      </LayoutDrawer>

      <LayoutContent>
        { children }
      </LayoutContent>
    </Layout>
  );
}

/** exports **/
export default mdlUpgrade(App);
