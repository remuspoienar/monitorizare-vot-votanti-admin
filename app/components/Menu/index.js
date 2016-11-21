import React from 'react';
import MenuList from './MenuListStyle';
import MenuItem from './MenuListItem';
import StyledLink from './Link';

export default class Menu extends React.PureComponent {
  componentDidMount() {
    const path = this.props.pathname.split('/');
    const getLocation = path[1] || path[0];
    document.getElementById(getLocation).style.background = '#352245';
    document.getElementById(getLocation).style.fontWeight = 'bold';
    document.getElementById(getLocation).firstElementChild.style.color = '#FFCC00';
  }

  render() {
    return (
      <MenuList>
        <MenuItem id="login"><StyledLink to="acasa">LOGIN</StyledLink></MenuItem>
        <MenuItem id="reset"><StyledLink to="statistici">RESETARE PAROLA</StyledLink></MenuItem>
        <MenuItem id="logout"><StyledLink to="sesizari">LOGOUT</StyledLink></MenuItem>
      </MenuList>
    );
  }
}

Menu.propTypes = {
  pathname: React.PropTypes.string,
};
