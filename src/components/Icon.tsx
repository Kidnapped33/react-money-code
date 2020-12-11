import React from 'react';
import cs from 'classnames';

require('icons/money.svg');
require('icons/tag.svg');
require('icons/chart.svg');
require('icons/right.svg');
require('icons/left.svg');

//还可以优化为引入一个目录，而不需要引入单个svg

type Props = {
    name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
    const {name, children, className, ...rest} = props;
    return (
        // ...rest className会覆盖之前的 icon
        <svg className={cs('icon', className)} {...rest}>
            {props.name && <use xlinkHref={'#' + props.name}/>}
        </svg>
    );
};

export default Icon;