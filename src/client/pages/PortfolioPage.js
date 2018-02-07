import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContent } from '../actions';
import { Helmet } from 'react-helmet';

class Portfolio extends Component {
  componentDidMount() {
    // this.props.fetchUsers();
    this.props.fetchContent();
  }

  // renderUsers() {
  //   return this.props.users.map(user => {
  //     return <li key={user.id}>{user.name}</li>;
  //   });
  // }

  head() {
    return (
      <Helmet>
        <title>Here</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        <div className='portfolio__container'>
            <div className={`portfolio__toggle`}>
              <button
                className='toggle__edit'
                type='button'
                value='Edit'
              >
              Edit
              </button>
              <button
                className='toggle__preview'
                type='button'
                value='Preview'
              >
              Preview
              </button>
              {this.props.content.first_name}
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, content } = state;
  return {
    users,
    content
  };
}

function loadData(store) {
  return store.dispatch(fetchContent());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchContent })(Portfolio)
};
