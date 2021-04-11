import React, { ReactFragment } from 'react'
const withClass = (WrappedComponent: any, className: string) => {
    return (props: any) => {
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    };
};

export default withClass