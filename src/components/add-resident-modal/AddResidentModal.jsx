import React from 'react';
import s from './AddResidentModal.module.css';
import {createResident} from '../../store/reducers/residents-reducer';
import {useDispatch} from 'react-redux';
import {Button, Form, Input, Select} from 'antd';

export const AddResidentModal = props => {

    const
        {currentAddressID, setCreationModeHandler} = props,
        dispatch = useDispatch();

    const addResident = (values) => {
        const {name, prefix, phone, email} = values;
        const number = (prefix || '') + phone;
        dispatch(createResident(name, number, email, currentAddressID));
        setCreationModeHandler(false);
    };

    const cancelAddResident = () => {
        setCreationModeHandler(false);
    };

    const prefixSelector = (
        <Form.Item name='prefix' noStyle>
            <Select style={{width: 70}}>
                <Select.Option value='8'>8</Select.Option>
                <Select.Option value='+7'>+7</Select.Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className={s.AddResidentModal}>
            <Form
                className={s.AddResidentModal__card}
                name='basic'
                initialValues={{remember: true}}
                onFinish={addResident}
                autoComplete='off'
            >
                <h2 className={s.AddResidentModal__card_title}>Add new resident</h2>
                <Form.Item
                    className={s.AddResidentModal__card_item}
                    label='Resident name'
                    name='name'
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    className={s.AddResidentModal__card_item}
                    label='Phone'
                    name='phone'
                    rules={[{required: true, message: 'Please input your phone number!'}]}
                >
                    <Input addonBefore={prefixSelector}/>
                </Form.Item>

                <Form.Item
                    className={s.AddResidentModal__card_item}
                    label='Email'
                    name='email'
                >
                    <Input/>
                </Form.Item>

                <div className={s.AddResidentModal__card_buttons}>
                    <Form.Item>
                        <Button type='primary' onClick={cancelAddResident}>
                            Cancel
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Add resident
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};