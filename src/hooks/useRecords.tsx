import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
    tagIds: number[],
    notes: string,
    category: '-' | '+',
    amount: number,
    createTime: string
}
//新的类型，Omit忽略期中哪个类型
type newRecordItem = Omit<RecordItem, 'createTime'>

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || ''));
    }, []);

    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, [records]);

    const addRecord = (newRecord: newRecordItem) => {
        const record = {...newRecord, createTime: (new Date()).toISOString()};
        setRecords([...records, record]);
    };

    return {records, addRecord};
};