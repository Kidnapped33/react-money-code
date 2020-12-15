import {useEffect, useRef} from 'react';


//此hooks为去除第一次更新
const useUpdate = (fn: () => void, deps: any[]) => {
    const count = useRef(0);
    useEffect(() => {count.current += 1; });
    useEffect(() => {
        if (count.current > 1) {fn();}
    }, [deps]);//不可变数据
};

export {useUpdate};

