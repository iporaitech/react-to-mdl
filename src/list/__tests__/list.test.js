import React from 'react';
import {shallow} from 'enzyme';
import List, { ListItem } from 'react-to-mdl/lib/list';
import Content from 'react-to-mdl/lib/Content';
import Icon from 'react-to-mdl/lib/Icon';
import Action from 'react-to-mdl/lib/Action';
import Subtitle from 'react-to-mdl/lib/Subtitle';
import Info from 'react-to-mdl/lib/Info';
import Text from 'react-to-mdl/lib/Text';

/**
 * These tests are based on the examples in:
 * https://getmdl.io/components/index.html#lists-section
 */
describe('List', () => {
  let list = null;
  let expectedList = null;

  afterEach(() => {
    expect(list).toBeTruthy()
    expect(list.html()).toEqual(expectedList.html())
  })

  test('Simple list', () => {
    list = shallow(
      <List className='custom-class'>
        <ListItem>
          <Content type='span' listItemPrimary>
            Bryan Cranston
          </Content>
        </ListItem>
        <ListItem>
          <Content type='span' listItemPrimary>
            Aaron Paul
          </Content>
        </ListItem>
        <ListItem>
          <Content type='span' listItemPrimary>
            Bob Odenkirk
          </Content>
        </ListItem>
      </List>
    );

    expectedList = shallow(
      <ul className="mdl-list custom-class">
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            Bryan Cranston
          </span>
        </li>
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            Aaron Paul
          </span>
        </li>
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            Bob Odenkirk
          </span>
        </li>
      </ul>
    );
  }); // END Simple list

  test('With icons', () => {
    list = shallow(
      <List className='custom-class'>
        <ListItem>
          <Content type='span' listItemPrimary>
            <Icon listItem>person</Icon>
            Bryan Cranston
          </Content>
        </ListItem>
        <ListItem>
          <Content type='span' listItemPrimary>
            <Icon listItem>person</Icon>
            Aaron Paul
          </Content>
        </ListItem>
        <ListItem>
          <Content type='span' listItemPrimary>
            <Icon listItem>person</Icon>
            Bob Odenkirk
          </Content>
        </ListItem>
      </List>
    );

    expectedList = shallow(
      <ul className="mdl-list custom-class">
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-icon">person</i>
            Bryan Cranston
          </span>
        </li>
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-icon">person</i>
            Aaron Paul
          </span>
        </li>
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-icon">person</i>
            Bob Odenkirk
          </span>
        </li>
      </ul>
    );
  }); // END With icons

  test('With avatars and actions', () => {
    list = shallow(
      <List type='div'>
        <ListItem type='div'>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            <span>Bryan Cranston</span>
          </Content>
          <Action type='a' href='#' listItemSecondary>
            <Icon>star</Icon>
          </Action>
        </ListItem>
        <ListItem type='div'>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            <span>Aaron Paul</span>
          </Content>
          <Action type='a' href='#' listItemSecondary>
            <Icon>star</Icon>
          </Action>
        </ListItem>
        <ListItem type='div'>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            <span>Bob Odenkirk</span>
          </Content>
          <Action type='a' href='#' listItemSecondary>
            <Icon>star</Icon>
          </Action>
        </ListItem>
      </List>
    );

    expectedList = shallow(
      <div className="mdl-list">
        <div className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Bryan Cranston</span>
          </span>
          <a  href="#" className="mdl-list__item-secondary-action">
            <i className="material-icons">star</i>
          </a>
        </div>
        <div className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Aaron Paul</span>
          </span>
          <a  href="#" className="mdl-list__item-secondary-action">
            <i className="material-icons">star</i>
          </a>
        </div>
        <div className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Bob Odenkirk</span>
          </span>
          {/*
            NOTICE: In the example it uses a secondary-content here but then
            it says it that kind of "content" requires two-lilne or three-line.
          */}
          <a href="#" className="mdl-list__item-secondary-action">
            <i className="material-icons">star</i>
          </a>
        </div>
      </div>
    );
  }); // END With avatars and actions

  test('With avatars and controls', () => {
    // TODO: implement Checkbox, Radio and Switch and then update this snippet
    list = shallow(
      <List>
        <ListItem>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            Bryan Cranston
          </Content>
          <Action type='span' listItemSecondary>
            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="list-checkbox-1">
              <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" defaultChecked={true} />
            </label>
          </Action>
        </ListItem>
        <ListItem>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            Aaron Paul
          </Content>
          <Action type='span' listItemSecondary>
            <label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-1">
              <input type="radio" id="list-option-1" className="mdl-radio__button" name="options" value="1" defaultChecked={true} />
            </label>
          </Action>
        </ListItem>
        <ListItem>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            Bob Odenkirk
          </Content>
          <Action type='span' listItemSecondary>
            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="list-switch-1">
              <input type="checkbox" id="list-switch-1" className="mdl-switch__input" defaultChecked={true} />
            </label>
          </Action>
        </ListItem>
      </List>
    );

    expectedList = shallow(
      <ul className="mdl-list">
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            Bryan Cranston
          </span>
          <span className="mdl-list__item-secondary-action">
            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="list-checkbox-1">
              <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" defaultChecked={true} />
            </label>
          </span>
        </li>
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            Aaron Paul
          </span>
          <span className="mdl-list__item-secondary-action">
            <label className="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-1">
              <input type="radio" id="list-option-1" className="mdl-radio__button" name="options" value="1" defaultChecked={true} />
            </label>
          </span>
        </li>
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            Bob Odenkirk
          </span>
          <span className="mdl-list__item-secondary-action">
            <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor="list-switch-1">
              <input type="checkbox" id="list-switch-1" className="mdl-switch__input" defaultChecked={true} />
            </label>
          </span>
        </li>
      </ul>
    );
  }); // END With avatars and controls

  test('Two line', () => {
    list = shallow(
      <List>
        <ListItem twoLine>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            <span>Bryan Cranston</span>
            <Subtitle listItem>62 Episodes</Subtitle>
          </Content>
          <Content type='span' listItemSecondary>
            <Info listItemSecondary>Actor</Info>
            <Action type='a' href='#' listItemSecondary>
              <Icon>star</Icon>
            </Action>
          </Content>
        </ListItem>
        <ListItem twoLine>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            <span>Aaron Paul</span>
            <Subtitle listItem>62 Episodes</Subtitle>
          </Content>
          <Content type='span' listItemSecondary>
            <Action type='a' href='#' listItemSecondary>
              <Icon>star</Icon>
            </Action>
          </Content>
        </ListItem>
        <ListItem twoLine>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            <span>Bob Odenkirk</span>
            <Subtitle listItem>62 Episodes</Subtitle>
          </Content>
          <Content type='span' listItemSecondary>
            <Action type='a' href='#' listItemSecondary>
              <Icon>star</Icon>
            </Action>
          </Content>
        </ListItem>
      </List>
    );

    expectedList = shallow(
      <ul className="mdl-list">
        <li className="mdl-list__item mdl-list__item--two-line">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Bryan Cranston</span>
            <span className="mdl-list__item-sub-title">62 Episodes</span>
          </span>
          <span className="mdl-list__item-secondary-content">
            <span className="mdl-list__item-secondary-info">Actor</span>
            <a href="#" className="mdl-list__item-secondary-action">
              <i className="material-icons">star</i>
            </a>
          </span>
        </li>
        <li className="mdl-list__item mdl-list__item--two-line">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Aaron Paul</span>
            <span className="mdl-list__item-sub-title">62 Episodes</span>
          </span>
          <span className="mdl-list__item-secondary-content">
            <a href="#" className="mdl-list__item-secondary-action">
              <i className="material-icons">star</i>
            </a>
          </span>
        </li>
        <li className="mdl-list__item mdl-list__item--two-line">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Bob Odenkirk</span>
            <span className="mdl-list__item-sub-title">62 Episodes</span>
          </span>
          <span className="mdl-list__item-secondary-content">
            <a href="#" className="mdl-list__item-secondary-action">
              <i className="material-icons">star</i>
            </a>
          </span>
        </li>
      </ul>
    );
  }); // END Two line

  test('Three line', () => {
    list = shallow(
      <List>
        <ListItem threeLine>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            <span>Bryan Cranston</span>
            <Text listItemBody>
              Bryan Cranston played the role of Walter in Breaking Bad. He is also known
              for playing Hal in Malcom in the Middle.
            </Text>
          </Content>
          <Content type='span' listItemSecondary>
            <Action type='a' href='#' listItemSecondary>
              <Icon>star</Icon>
            </Action>
          </Content>
        </ListItem>
        <ListItem threeLine>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            <span>Aaron Paul</span>
            <Text listItemBody>
              Aaron Paul played the role of Jesse in Breaking Bad. He also featured in
              the "Need For Speed" Movie.
            </Text>
          </Content>
          <Content type='span' listItemSecondary>
            <Action type='a' href='#' listItemSecondary>
              <Icon>star</Icon>
            </Action>
          </Content>
        </ListItem>
        <ListItem threeLine>
          <Content type='span' listItemPrimary>
            <Icon listItemAvatar>person</Icon>
            <span>Bob Odenkirk</span>
            <Text listItemBody>
              Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the
              character, Bob stars in his own show now, called "Better Call Saul".
            </Text>
          </Content>
          <Content type='span' listItemSecondary>
            <Action type='a' href='#' listItemSecondary>
              <Icon>star</Icon>
            </Action>
          </Content>
        </ListItem>
      </List>
    );

    expectedList = shallow(
      <ul className="mdl-list">
        <li className="mdl-list__item mdl-list__item--three-line">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Bryan Cranston</span>
            <span className="mdl-list__item-text-body">
              Bryan Cranston played the role of Walter in Breaking Bad. He is also known
              for playing Hal in Malcom in the Middle.
            </span>
          </span>
          <span className="mdl-list__item-secondary-content">
            <a href="#" className="mdl-list__item-secondary-action">
              <i className="material-icons">star</i>
            </a>
          </span>
        </li>
        <li className="mdl-list__item mdl-list__item--three-line">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Aaron Paul</span>
            <span className="mdl-list__item-text-body">
              Aaron Paul played the role of Jesse in Breaking Bad. He also featured in
              the "Need For Speed" Movie.
            </span>
          </span>
          <span className="mdl-list__item-secondary-content">
            <a href="#" className="mdl-list__item-secondary-action">
              <i className="material-icons">star</i>
            </a>
          </span>
        </li>
        <li className="mdl-list__item mdl-list__item--three-line">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>Bob Odenkirk</span>
            <span className="mdl-list__item-text-body">
              Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the
              character, Bob stars in his own show now, called "Better Call Saul".
            </span>
          </span>
          <span className="mdl-list__item-secondary-content">
            <a href="#" className="mdl-list__item-secondary-action">
              <i className="material-icons">star</i>
            </a>
          </span>
        </li>
      </ul>

    );
  });
});
