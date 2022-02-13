import React, {useState} from 'react';
import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import Avatar from 'antd/es/avatar/avatar';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import {RemoveResidentModal} from '../remove-resident-modal/RemoveResidentModal';

export const Resident = props => {

    const
        {name, phone, email, bindId, currentAddressID} = props,
        [removeMode, setRemoveMode] = useState(false);

    const setRemoveModeHandler = () => {
        setRemoveMode(!removeMode);
    };

    return (
        <div>
            {removeMode && <RemoveResidentModal
                bindId={bindId}
                currentAddressID={currentAddressID}
                setRemoveModeHandler={setRemoveModeHandler}
            />}
            <Card
                style={{width: 300, marginTop: 16}}
                actions={[
                    <EditOutlined key='edit' disabled={true}/>,
                    <DeleteOutlined onClick={setRemoveModeHandler}
                                    key='delete'/>
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                    title={name || 'Resident'}
                    description={<div>
                        <div>Phone: {phone}</div>
                        <div>Email: {email || 'Email not specified'}</div>
                    </div>}
                />
            </Card>
        </div>
    );
};