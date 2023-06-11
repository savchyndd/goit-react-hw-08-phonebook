import { useAuth } from 'hooks/useAuth';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LoggedNav/LoggedNav';

import { Header } from './AppBar.module';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </Header>
  );
};

export default AppBar;
