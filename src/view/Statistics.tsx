import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
 background-color: white;
`;
const Item = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color:white;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
> .note{
margin-right: auto;
margin-left: 16px;
color: #999;
}
`;

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {getName} = useTags();
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            <div>
                {records.map(r => {
                    {day(r.createTime).format('YYYY年MM月DD日');}
                    return <Item>
                        <div className="tags">
                            {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        </div>
                        {r.notes && <div className="note">
                            {r.notes}
                        </div>}
                        ￥{r.amount}
                    </Item>;
                })}
            </div>
        </Layout>
    );
}

export default Statistics;
;
;