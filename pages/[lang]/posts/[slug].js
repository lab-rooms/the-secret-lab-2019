import React from 'react';

class PostPage extends React.Component {
  static async getInitialProps({ query }) {
    const language = query.lang || 'en';
    const { slug } = query;

    return {
      slug,
      language,
    }
  }

  render() {
    return (
      <p>
        i done a load
      </p>
    );
  }
}

export default PostPage;
