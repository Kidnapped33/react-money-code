import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: #FFFFFF;
  padding: 12px 16px;
    > ol{ padding: 0 -12px;
      > li{background: #D9D9D9;
          border-radius: 18px;
          display: inline-block;
          padding: 3px 18px;
          font-size: 14px;
          margin: 8px 12px;
          &.selected{
          background-color: #f60;
          }
        }
      }
      > button {
      background: none;
      border: none;
      padding: 2px 4px;
      border-bottom: 1px solid #333;
      color: #666;
      margin: 8px;
      }
`;

type Props = {
    value: string[]
    onChange: (selected: string[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const selectedTag = props.value;
    //const [selectedTag, setSelectedTag] = useState<string[]>([]);
    const onAddTag = () => {
        const tagName = window.prompt('新增标签');
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }
    };
    const onToggleTag = (tag: string) => {
        if (selectedTag.indexOf(tag) >= 0) {
            props.onChange(selectedTag.filter(t => t !== tag));
        } else {
            props.onChange([tag]);
        }
    };
    const getClass = (tag: string) => selectedTag.indexOf(tag) >= 0 ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag => <li key={tag}
                                     onClick={() => {onToggleTag(tag);}}
                                     className={getClass(tag)}>{tag}
                </li>)}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    );
};

export {TagsSection};