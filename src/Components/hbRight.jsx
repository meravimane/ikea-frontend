import React, { useState } from 'react';
import { Drawer, Button, Space, Radio } from 'antd';

export const HBRight = () => {

    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
        setVisible(true);
    };

    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setVisible(false);
    };
    return <>
        <Space>
            <Radio.Group value={placement} onChange={onChange}>

            </Radio.Group>
            <Button id='navbarLogo' type="primary" onClick={showDrawer}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
            </Button>
        </Space>
        <Drawer
            title={<img src='https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg' id="ikeaLogo" alt="" />}
            placement={placement}
            width={500}
            onClose={onClose}
            visible={visible}
            extra={
                <Space>
                    {/* <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={onClose}>
                        OK
                    </Button> */}
                </Space>
            }
        >

            <h1>Products</h1>
            <h1>Rooms</h1>
            <h1>New at IKEA</h1>
            <h1>All offers</h1>
        </Drawer>
    </>
}