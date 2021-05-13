import React,{ useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React',
        content: 'React is front end JavaScript framework.'
    },
    {
        title: "Why use React",
        content: 'React is favorite JavaScript library among engineers.'
    },
    {
        title: 'How do you use React',
        content: 'I use React by creating components.'
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
            <Header/>

            <Route path='/'>
                <Accordion items={items}/>
            </Route>

            <Route path='/search'>
                <Search/>
            </Route>

            <Route path='/dropdown'>
                <Dropdown 
                label='Select Color'   
                selected={selected} 
                onSelectedChange={setSelected}
                options={options}/>
            </Route>

            <Route path='/translate'>
                <Translate/>
            </Route>
        </div>
    ); 
    
};




