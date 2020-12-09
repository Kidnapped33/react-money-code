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

    return (
        <MyLayout>
            {selected.tags.join(',')}
            {selected.notes}
            {selected.category}
            {selected.amount}
            <TagsSection value={selected.tags}
                         onChange={(tags) => setSelected({...selected, tags: tags})}/>
            <NoteSection value={selected.notes}
                         onChange={(notes) => setSelected({...selected, notes: notes})}/>
            <CategorySection value={selected.category}
                             onChange={(category) => setSelected({...selected, category: category})}/>
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => setSelected({...selected, amount: amount})}/>
        </MyLayout>
    );
}

export default Money;