import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './money/CategorySection';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
 background-color: white;
`;

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
        </Layout>
    );
}

export default Statistics;