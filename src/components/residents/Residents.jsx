import React from 'react';
import {Button} from 'antd';
import {UserAddOutlined} from '@ant-design/icons';
import s from '../app/App.module.css';
import {Resident} from '../resident/Resident';
import {useSelector} from 'react-redux';

export const Residents = props => {

    const
        {currentAddressID, setCreationModeHandler} = props,
        residents = useSelector((state => state.residents.residents));

    return (
        <div>
            <Button type="primary"
                    icon={<UserAddOutlined/>}
                    onClick={setCreationModeHandler}
                    disabled={currentAddressID === null}
            >
                Add resident
            </Button>
            <div className={s.app__residents}>
                {residents.map(i => <Resident key={i.id}
                                              name={i.name}
                                              phone={i.phone}
                                              email={i.email}
                                              bindId={i.bindId}
                                              currentAddressID={currentAddressID}
                />)}
            </div>
        </div>
    );
};