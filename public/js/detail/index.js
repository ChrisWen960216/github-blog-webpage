/*
 * 博客详情页面
 * @Author slashhuang
 * 17/4/25
 */

import { blogDetailApi } from '../manage/ajax/';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Spin } from 'antd';
import querystring from 'querystring';
import { DetailPanel } from '../components/';

require('./scss/index.scss');

class DetailIndex extends Component {
  constructor (props) {
    super(props);
    this.state = {
      detail: null
    };
  }
  mponentDidMount () {
    const query = querystring.parse(location.search.substr(1))
    blogDetailApi(query).then(detail => {
      this.setState({detail});
    });
  }
  render () {
    // const { detail } = this.state;
    return (
      <div className='container clearfix'>
        <div className="widgets">
        </div>
      </div>
    );
  }
}
render(<DetailIndex />, document.getElementById('mod-detail'))
