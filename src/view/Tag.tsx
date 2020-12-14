import React from 'react';
import {useTags} from '../hooks/useTags';
import {useParams, useHistory} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';


const TopBar = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
line-height: 20px;
padding: 14px;
background-color: white;
margin: 0 0 8px 0;
`;
const InputWrapper = styled.div`
background-color: white;
padding: 0 16px;
font-size: 14px;
`;

type Params = { id: string }
const Tag: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {id: idString} = useParams<Params>();
    const tag = findTag(parseInt(idString));

    const history = useHistory();
    const onClickBack = () => {
        history.goBack();
    };
    return (
        <Layout>
            <TopBar>
                <Icon name="left" onClick={onClickBack}/>
                <span>编辑标签</span>
                <Icon/>
            </TopBar>
            {tag ? <div>
                <InputWrapper>
                    <Input label={'标签名'} type={'text'} value={tag.name}
                           onChange={(e) => {
                               updateTag(tag.id, {name: e.target.value});
                           }
                           }/>
                </InputWrapper>
                <Center>
                    <Space/>
                    <Space/>
                    <Space/>
                    <Button onClick={() => {deleteTag(tag.id);}}>删除标签</Button>
                </Center>
            </div> : <div>tag 不存在</div>}

        </Layout>
    )
        ;
};

export {Tag};