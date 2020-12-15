import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
 background-color: white;
`;
const Header = styled.h3`
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
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
    const hash: { [K: string]: RecordItem[] } = {};
    const selectedRecords = records.filter(r => r.category === category);
    selectedRecords.map(r => {
        const key = day(r.createTime).format('YYYY-MM-DD');
        const value = r;
        // key 不在 hash 里面，就先创建空数组，然后 push 进去
        if (!(key in hash)) {
            hash[key] = []; //变成数组才能push
        }
        hash[key].push(value);
    });

    const array = Object.entries(hash).sort((a, b) => {
            if (a[0] === b[0]) return 0;
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        }
    );


    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            {array.map(([date, records]) =>
                <div>
                    <Header>{date} 合计 {}</Header>

                    <div>
                        {records.map(r => {
                            //key={r.createTime}
                            return <Item>
                                <div className="tags oneLine">
                                    {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
                                </div>
                                {r.notes && <div className="note">
                                    {r.notes}
                                </div>}
                                ￥{r.amount}
                            </Item>;
                        })}
                    </div>
                </div>
            )}
        </Layout>
    );
}

export default Statistics;
;
;