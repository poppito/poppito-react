import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function Layout({ children, color, pageContext: { header } }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
          </Helmet>
          <div className="blogpage">
    <a href={"/blog"} smooth duration={1000}>
    {"Back"}
    </a>
</div>

<div className="blogText">
          <h1 title={header} color={color} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
            <br/>
            <br/>
          <h2>Questions? Suggestions? Compliments? Tips to make this post better? I'd love to hear your thoughts! Tweet to <a href="https://twitter.com/overjeer">me</a> on the ol' Twitter!</h2>
          </div>
          </div>
        </>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    header: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;