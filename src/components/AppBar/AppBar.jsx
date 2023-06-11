import { useAuth } from 'hooks/useAuth';

import Navigation from 'components/Navigation/Navigation';
import UserNav from 'components/UserNav/UserNav';
import LoggedNav from 'components/LoggedNav/LoggedNav';

import { Header } from './AppBar.module';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserNav /> : <LoggedNav />}
    </Header>
  );
};

export default AppBar;
