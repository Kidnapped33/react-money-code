import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  //justify-content: flex-end;
  align-items: flex-start;
  background: #FFFFFF;
  padding: 12px 16px;
  flex-shrink: 1;
  overflow:auto;

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
    value: number[]
    onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
        const {tags, addTag} = useTags();
        const selectedTagIds = props.value;
        //const [selectedTagIds, setSelectedTag] = useState<string[]>([]);

        const onToggleTag = (tagId: number) => {
            if (selectedTagIds.indexOf(tagId) >= 0) {
                props.onChange(selectedTagIds.filter(t => t !== tagId));
            } else {
                props.onChange([tagId]);
            }
        };
        const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
        return (
            <Wrapper>
                <button onClick={addTag}>新增标签</button>
                <ol>
                    {tags.map(tag =>
                        <li key={tag.id}
                            onClick={() => {onToggleTag(tag.id);}}
                            className={getClass(tag.id)}>{tag.name}
                        </li>)}
                </ol>
            </Wrapper>
        );
    }
;

export {TagsSection};