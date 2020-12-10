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
`;

function Money() {
    type Category = '-' | '+';
    //4个组件通信
    const [selected, setSelected] = useState({
        tags: [] as string[],
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
            <TagsSection value={selected.tags}
                         onChange={tags => onChange({tags})}/>
            <NoteSection value={selected.notes}
                         onChange={notes => onChange({notes})}/>
            <CategorySection value={selected.category}
                             onChange={category => onChange({category})}/>
            < NumberPadSection value={selected.amount}
                               onChange={amount => onChange({amount})}
                               onOk={() => {}}
            />
        </MyLayout>
    );
}

export default Money;
