/*
 * 博客详情页面
 * Created By ChrisWen
 * 17/10/10
 */
import { blogListApi } from '../manage/ajax/';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Spin } from 'antd';
import { DetailPanel } from '../components/';

class ListPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            blogList: []
        };
    }

    componentDidMount () {
        blogListApi({
            'category.name': 'about'
        }).then(blogList => {
            this.setState({blogList});
        });
    }

    renderBlog (detail) {
        return <DetailPanel detail={detail}/>
    }

    renderList () {
        const { blogList } = this.state;
        return blogList.map(blog => {
            return this.renderBlog(blog);
        });
    }

    render () {
        const { blogList } = this.state;
        return (
            <div className='container clearfix'>
                <div className="widgets">
                </div>
            </div>
        );
    }
}

render(<ListPanel />, document.getElementById('mod-about'));
