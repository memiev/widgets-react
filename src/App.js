import React,{ useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';


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

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color is Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Dropdown 
            selected={selected} 
            onSelectedChange={setSelected}
            options={options}
            />
            
        </div>
    ); 
    
};
{/* <Search/> */}
{/* <Accordion items={items}/> */}