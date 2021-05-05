import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React',
        content: 'React is front edn js framework'
    },
    {
        title: "Why use React",
        content: 'React is favorite js lib among engineers'
    },
    {
        title: 'How do you use React',
        content: 'I use React by creating components'
    }
];

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    ); 
    
};