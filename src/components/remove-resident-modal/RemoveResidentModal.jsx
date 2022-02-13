import React from 'react';
import s from './RemoveResidentModal.module.css';
import {Button} from 'antd';
import {deleteResident} from '../../store/reducers/residents-reducer';
import {useDispatch} from 'react-redux';
import {DeleteOutlined} from '@ant-design/icons';

export const RemoveResidentModal = props => {

    const
        {bindId, currentAddressID, setRemoveModeHandler} = props,
        dispatch = useDispatch();

    const deleteThisResident = () => {
        dispatch(deleteResident(bindId, currentAddressID));
        setRemoveModeHandler(false);
    };

    const cancelDeleteThisResident = () => {
        setRemoveModeHandler(false);
    };

    return (
        <div className={s.removeResidentModal}>
            <div className={s.removeResidentModal__card}>
                <DeleteOutlined className={s.removeResidentModal__card_icon}/>
                <p>Are you sure you want to remove the resident?</p>
                <div className={s.removeResidentModal__card_buttonBlock}>
                    <Button onClick={deleteThisResident} type={'primary'}>Yes</Button>
                    <Button onClick={cancelDeleteThisResident} type={'default'}>No</Button>
                </div>
            </div>
        </div>
    );
};