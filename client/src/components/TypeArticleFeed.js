import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleContainer from '../container/ArticleContainer';

class TypeArticleFeed extends Component {

  constructor(props) {
    super(props);
    let articles_filtered = this.setStateArticles(props);
    this.state = {
      articles: articles_filtered
    }
  }

  filterArticleWithTag = tag => {
    let { articles } = this.props;
    if (articles && tag) {
      //why not return the filter new article
      let articles_filtered = articles.filter(article => {
        let { tags } = article;
        return tags.indexOf(tag) > -1;
      });
      return articles_filtered;
    }
  };

  setStateArticles = (props) => {
    let { tag } = props.match.params;
    return this.filterArticleWithTag(tag);
  }

  //wont be called on component initlize process
  componentWillReceiveProps(nextProps) {
    let articles_filtered = this.setStateArticles(nextProps);
    this.setState({
      articles: articles_filtered
    });
  }

  render() {
    return <ArticleContainer articles={this.state.articles} dispatch={this.props.dispatch} />;
  }

}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(TypeArticleFeed);
