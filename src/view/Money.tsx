import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberPadSection} from './money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  > .category{
  background-color: #c4c4c4;
  }
`;
const CategoryWrapper = styled.div`
 background-color: #c4c4c4;
`;

function Money() {
    type Category = '-' | '+';
    //4个组件通信
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        notes: '',
        category: '-' as Category,
        amount: 0
    });
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });
    };

    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                         onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={selected.notes}
                         onChange={notes => onChange({notes})}/>
            <CategoryWrapper>
                <CategorySection value={selected.category}
                                 onChange={category => onChange({category})}/>
            </CategoryWrapper>
            < NumberPadSection value={selected.amount}
                               onChange={amount => onChange({amount})}
                               onOk={() => {}}
            />
        </MyLayout>
    );
}

export default Money;
