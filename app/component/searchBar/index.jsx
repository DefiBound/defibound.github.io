import React from 'react'
import { Select, Space } from 'antd';
const index = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Space wrap>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          allowClear
          options={[{ value: 'lucy', label: 'Lucy' }]}
        />
      </Space>
    </div>
  )
}

export default index