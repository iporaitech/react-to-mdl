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

class App extends React.Component {
  render() {
    return (
      <Layout id="starwars">
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
            <NavigationLink to="#cards">Cards</NavigationLink>
            {/* <LogoutLink /> */}
          </Navigation>
        </LayoutDrawer>

        <LayoutContent>
          <h2 style={{textAlign: 'center'}}>Spinner example</h2>
          <div className="loading">
            <Spinner />
          </div>
        </LayoutContent>
      </Layout>
    );
  }
}

/** exports **/
export default mdlUpgrade(App);
