import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';


const TopBar = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
line-height: 20px;
padding: 14px;
background-color: white;
margin: 0 0 5px 0;
`;
const Wrapper = styled.section`
padding: 0 16px;
font-size: 14px;
  > label {
    background: white;
    display: flex;
    align-items: center;
    > span {margin-right: 16px; white-space: nowrap;}
     > input {
        background: none;
        border: none;
        display: block;
        width: 100%;
        height: 36px;
      }
  }
`;
const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`;

type Params = { id: string }
const Tag: React.FC = () => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <TopBar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </TopBar>
            <Wrapper>
                <label>
                    <span>标签名 {tag.name}</span>
                    <input type="text"/>
                </label>
            </Wrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button>删除标签</Button>
            </Center>
        </Layout>
    );
};

export {Tag};