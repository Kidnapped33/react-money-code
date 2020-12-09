import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
    > ul {
      display: flex;
      background-color: #c4c4c4;
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

const CategorySection: React.FC = () => {
    const [category, setCategory] = useState('-');
    return (
        <Wrapper>
            <ul>
                <li className={category === '-' ? 'selected' : ''}
                    onClick={() => {setCategory('-');}}
                >支出
                </li>
                <li className={category === '+' ? 'selected' : ''}
                    onClick={() => {setCategory('+');}}
                >收入
                </li>
            </ul>
        </Wrapper>
    );
};

export {CategorySection};