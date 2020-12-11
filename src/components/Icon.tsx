import React from 'react';

require('icons/money.svg');
require('icons/tag.svg');
require('icons/chart.svg');
require('icons/right.svg');
require('icons/left.svg');

//还可以优化为引入一个目录，而不需要引入单个svg

type Props = {
    name?: string
}

const Icon = (props: Props) => {
    return (
        <svg className="icon">
            {props.name && <use xlinkHref={'#' + props.name}/>}
        </svg>
    );
};

export default Icon;