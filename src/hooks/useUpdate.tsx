import {useEffect, useRef} from 'react';


//此hooks为去除第一次更新
const useUpdate = (fn: () => void, def: any[]) => {
    const count = useRef(0);
    useEffect(() => {count.current += 1; });
    useEffect(() => {
        fn();
    }, [def]);
};

export {useUpdate};

