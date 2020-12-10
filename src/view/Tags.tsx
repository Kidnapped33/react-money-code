import Layout from '../components/Layout';
import React, {useState} from 'react';
import {useTags} from '../useTags';

function Tags() {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <ol>
                {tags.map(tag =>
                    <li key={tag}>{tag}</li>
                )}
            </ol>

            <h2>标签页</h2>
        </Layout>
    );
}

export default Tags;