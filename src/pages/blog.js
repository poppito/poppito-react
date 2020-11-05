import React from 'react';
import { Helmet } from 'react-helmet';
import Blog from '../components/Blog/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Pistol and Boo, where are you?'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Gatsby Simplefolio'} />
      </Helmet>
      <Blog />
    </>
  );
};
