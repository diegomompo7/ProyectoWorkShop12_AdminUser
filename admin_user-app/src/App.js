import './App.scss';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Spanish from './lang/es.json';
import English from './lang/en.json';
import Home from './components/Home/Home';
import Users from './components/Users/Users';

const locale = navigator.language;
let defaultMessages = Spanish;

switch (locale) {
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  case 'en-EN':
    defaultMessages = English;
    break;
  default:
    defaultMessages = Spanish;
    break;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <HashRouter>
        <div>
          <Header></Header>
          <button onClick={() => setMessages(Spanish)}>ES</button>
          <button onClick={() => setMessages(English)}>EN</button>
        </div>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/users' element={<Users></Users>}></Route>
        </Routes>
      </HashRouter>
    </IntlProvider>
  );
}

export default App;
