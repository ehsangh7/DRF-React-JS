import React from 'react'
import Posts from './Posts';


function PostLoading(Component) {
    return function PostLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Posts {...props} />;
        return (
            <p style={{ fontSize: '25px' }}>
                We are Waiting for the data to load!...
            </p>
        );
    };
}

export default PostLoading;
