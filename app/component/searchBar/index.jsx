import React from 'react'
import { Select, Space , Input} from 'antd';
import style from './index.module.css'
const index = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const {Search} = Input
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className={style.container}>
      <Space wrap>
        <span className={style.kind}>kinds:</span>
        <Select
          defaultValue="NFT"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'NFT', label: 'NFT' },
            { value: 'contract ownership', label: 'contract ownership' },
          ]}
        />
        <Search placeholder="input wrapper alias" onSearch={onSearch} style={{ width: 200 }} />
      </Space>
    </div>
  )
}

export default index