import React from 'react';
import List, { ListItem } from 'react-to-mdl/lib/list';
import Content from 'react-to-mdl/lib/Content';
import Icon from 'react-to-mdl/lib/Icon';
import Action from 'react-to-mdl/lib/Action';
import Subtitle from 'react-to-mdl/lib/Subtitle';
import Info from 'react-to-mdl/lib/Info';
import Text from 'react-to-mdl/lib/Text';

const simpleList = <List className='custom-class'>
  <ListItem>
    <Content tag='span' listItemPrimary>
      Bryan Cranston
    </Content>
  </ListItem>
  <ListItem>
    <Content tag='span' listItemPrimary>
      Aaron Paul
    </Content>
  </ListItem>
  <ListItem>
    <Content tag='span' listItemPrimary>
      Bob Odenkirk
    </Content>
  </ListItem>
</List>;

const withIcons = <List className='custom-class'>
  <ListItem>
    <Content tag='span' listItemPrimary>
      <Icon listItem>person</Icon>
      Bryan Cranston
    </Content>
  </ListItem>
  <ListItem>
    <Content tag='span' listItemPrimary>
      <Icon listItem>person</Icon>
      Aaron Paul
    </Content>
  </ListItem>
  <ListItem>
    <Content tag='span' listItemPrimary>
      <Icon listItem>person</Icon>
      Bob Odenkirk
    </Content>
  </ListItem>
</List>;

const avatarsAndActions = <List tag='div'>
  <ListItem tag='div'>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      <span>Bryan Cranston</span>
    </Content>
    <Action tag='a' href='#' listItemSecondary>
      <Icon>star</Icon>
    </Action>
  </ListItem>
  <ListItem tag='div'>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      <span>Aaron Paul</span>
    </Content>
    <Action tag='a' href='#' listItemSecondary>
      <Icon>star</Icon>
    </Action>
  </ListItem>
  <ListItem tag='div'>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      <span>Bob Odenkirk</span>
    </Content>
    <Action tag='a' href='#' listItemSecondary>
      <Icon>star</Icon>
    </Action>
  </ListItem>
</List>;

// TODO: implement Checkbox, Radio and Switch and then update this snippet
const avatarsAndControls = <List>
  <ListItem>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      Bryan Cranston
    </Content>
    <Action tag='span' listItemSecondary>
      <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="list-checkbox-1">
        <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" defaultChecked={true} />
      </label>
    </Action>
  </ListItem>
  <ListItem>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      Aaron Paul
    </Content>
    <Action tag='span' listItemSecondary>
      <label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-1">
        <input type="radio" id="list-option-1" className="mdl-radio__button" name="options" value="1" defaultChecked={true} />
      </label>
    </Action>
  </ListItem>
  <ListItem>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      Bob Odenkirk
    </Content>
    <Action tag='span' listItemSecondary>
      <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="list-switch-1">
        <input type="checkbox" id="list-switch-1" className="mdl-switch__input" defaultChecked={true} />
      </label>
    </Action>
  </ListItem>
</List>;

const twoLine = <List>
  <ListItem twoLine>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      <span>Bryan Cranston</span>
      <Subtitle listItem>62 Episodes</Subtitle>
    </Content>
    <Content tag='span' listItemSecondary>
      <Info listItemSecondary>Actor</Info>
      <Action tag='a' href='#' listItemSecondary>
        <Icon>star</Icon>
      </Action>
    </Content>
  </ListItem>
  <ListItem twoLine>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      <span>Aaron Paul</span>
      <Subtitle listItem>62 Episodes</Subtitle>
    </Content>
    <Content tag='span' listItemSecondary>
      <Action tag='a' href='#' listItemSecondary>
        <Icon>star</Icon>
      </Action>
    </Content>
  </ListItem>
  <ListItem twoLine>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      <span>Bob Odenkirk</span>
      <Subtitle listItem>62 Episodes</Subtitle>
    </Content>
    <Content tag='span' listItemSecondary>
      <Action tag='a' href='#' listItemSecondary>
        <Icon>star</Icon>
      </Action>
    </Content>
  </ListItem>
</List>;

const threeLine = <List>
  <ListItem threeLine>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      <span>Bryan Cranston</span>
      <Text listItemBody>
        Bryan Cranston played the role of Walter in Breaking Bad. He is also known
        for playing Hal in Malcom in the Middle.
      </Text>
    </Content>
    <Content tag='span' listItemSecondary>
      <Action tag='a' href='#' listItemSecondary>
        <Icon>star</Icon>
      </Action>
    </Content>
  </ListItem>
  <ListItem threeLine>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      <span>Aaron Paul</span>
      <Text listItemBody>
        Aaron Paul played the role of Jesse in Breaking Bad. He also featured in
        the "Need For Speed" Movie.
      </Text>
    </Content>
    <Content tag='span' listItemSecondary>
      <Action tag='a' href='#' listItemSecondary>
        <Icon>star</Icon>
      </Action>
    </Content>
  </ListItem>
  <ListItem threeLine>
    <Content tag='span' listItemPrimary>
      <Icon listItemAvatar>person</Icon>
      <span>Bob Odenkirk</span>
      <Text listItemBody>
        Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the
        character, Bob stars in his own show now, called "Better Call Saul".
      </Text>
    </Content>
    <Content tag='span' listItemSecondary>
      <Action tag='a' href='#' listItemSecondary>
        <Icon>star</Icon>
      </Action>
    </Content>
  </ListItem>
</List>

/** export snippets to be used in example App and tests **/
export default {
  simpleList,
  withIcons,
  avatarsAndActions,
  avatarsAndControls,
  twoLine,
  threeLine
}
