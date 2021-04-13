import React, { ReactFragment } from 'react';

interface IWithClass {
    className: string,
    children: ReactFragment
}
const withClass = (props: IWithClass) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default withClass