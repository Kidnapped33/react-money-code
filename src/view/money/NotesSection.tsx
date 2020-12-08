import styled from 'styled-components';

const NotesSection = styled.section`
padding: 0px 16px;
font-size: 14px;
  > label {
    background: #f5f5f5;
    display: flex;
    align-items: center;
    > span {margin-right: 16px; white-space: nowrap;}
     > input {
        background: none;
        border: none;
        display: block;
        width: 100%;
        height: 72px;
      }
  }
`;

export {NotesSection};