import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export  type RecordItem = {
    tagIds: number[],
    notes: string,
    category: '-' | '+',
    amount: number,
    createTime: string
}
//新的类型，Omit忽略期中哪个类型
type newRecordItem = Omit<RecordItem, 'createTime'>

const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, records);
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || ''));
    }, []);

    const addRecord = (newRecord: newRecordItem) => {
        if (newRecord.tagIds.length === 0) {
            alert('请选择标签');
            return false;
        } else if (newRecord.amount <= 0) {
            alert('多少钱呢？');
            return false;
        } else {
            const record = {...newRecord, createTime: (new Date()).toISOString()};
            setRecords([...records, record]);
            return true;
        }
    };

    return {records, addRecord};
};

export {useRecords};