import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink class="text-link" href="/sale">Sale</NavLink>
          <NavLink class="text-link" href="/new">New&nbsp;Releases</NavLink>
          <NavLink class="text-link" href="/men">Men</NavLink>
          <NavLink class="text-link" href="/women">Women</NavLink>
          <NavLink class="text-link" href="/kids">Kids</NavLink>
          <NavLink class="text-link" href="/collections">Collections</NavLink>
          <Icon class="icon-link" id="shopping-bag" strokeWidth={2} />
          <Icon class="icon-link" id="search" strokeWidth={2} />
          <Icon class="icon-link" id="menu" strokeWidth={2} />
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media ${QUERIES.tabletAndUnder} {
    display: none;
  }
`;

export default Header;
