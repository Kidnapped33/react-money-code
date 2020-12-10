import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 24px;
    > ul {
      display: flex;
      > li {
        width: 50%;
        text-align: center;
        padding: 16px 0;
        position: relative;
          &.selected::after{
           content: '';
           display: block;
           height: 3px;
           width: 100%;
           background-color: #333;
           position: absolute;
           left: 0;
           bottom: 0;
            }
      }
    }
`;
type Props = {
    value: '-' | '+';
    onChange: (value: '-' | '+') => void;
}
const CategorySection: React.FC<Props> = (props) => {
    //const [category, setCategory] = useState('-');
    const category = props.value;
    return (
        <Wrapper>
            <ul>
                <li className={category === '-' ? 'selected' : ''}
                    onClick={() => {props.onChange('-');}}
                >支出
                </li>
                <li className={category === '+' ? 'selected' : ''}
                    onClick={() => {props.onChange('+');}}
                >收入
                </li>
            </ul>
        </Wrapper>
    );
};

export {CategorySection};