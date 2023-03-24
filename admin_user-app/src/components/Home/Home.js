import { FormattedMessage } from 'react-intl';

const Home = () => {
  return <div>
    <h2><FormattedMessage id='home:welcome'></FormattedMessage></h2>
    <p><FormattedMessage id='home:userManagement'></FormattedMessage></p>
    <p><FormattedMessage id='home:apiDisclaimer'></FormattedMessage></p>
  </div>
}
export default Home;
