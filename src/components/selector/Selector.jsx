import React, {useMemo, useState} from 'react';
import {Select} from 'antd';

export const Selector = props => {

    const
        {placeholder, onSelect, list} = props,
        [filter, setFilter] = useState('');

    const change = (string) => {
        setFilter(string);
    };

    const filtredList = useMemo(()=> {
        return list
            .filter(i => i.name.toLowerCase().includes(filter))
            .map(i => <Select.Option children={i.name} key={i.id} value={i.name}/>);
    }, [list, filter]);

    const selectOption = (e) => {
        onSelect(list.find(i => i.name === e).id);
    };

    return (
        <Select style={{width: '200px'}}
                showSearch
                searchValue={filter}
                onSelect={selectOption}
                onSearch={change}
                placeholder={placeholder}
                disabled={filtredList === null}>
            {filtredList}
        </Select>
    );
};