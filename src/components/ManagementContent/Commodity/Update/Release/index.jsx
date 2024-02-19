import {Button, Image, Input, InputNumber, Radio, Select} from "antd";
import "./index.css";
import avatar from "../../../../../assets/avatar.jpg";
import avatar2 from "../../../../../assets/avatar2.jpg";
import avatar3 from "../../../../../assets/avatar3.jpg";
import avatar4 from "../../../../../assets/avatar4.jpg";
import avatar5 from "../../../../../assets/avatar5.jpg";
import {Fragment, useState} from "react";

const pictureCount = [avatar, avatar2, avatar3, avatar4, avatar5];

const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const selectItems = [
    {
        value: 'stationery',
        label: '文具用品',
    },
    {
        value: 'jewelry',
        label: '服装配饰',
    },
    {
        value: 'life',
        label: '生活用品',
    },
    {
        value: 'originality',
        label: '创意设计',
    },
    {
        value: 'ordered',
        label: '私人订制',
    },
];

function Release() {
    const [value, setValue] = useState(1);
    const onRadioChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Fragment>
            <div className={"release_commodity_pictures_box"}>
                <ul>
                    {pictureCount.map((item, index) => {
                        return <div style={{display: "inline-block"}}>
                            <li style={{float: "left", listStyle: "none", marginRight: 20}}>
                                <Image style={{width: 150, boxShadow: "#00000050 0 0 5px"}} src={item}/>
                                <li><Button style={{marginTop: 5}}>更换图片</Button></li>
                            </li>
                        </div>
                    })}
                </ul>
            </div>
            <div style={{marginLeft: 40}}>
                商品主要名：<Input style={{width: "25%"}} placeholder="30字以内"/><br/><br/>
                商品介绍：<Input style={{width: "35%"}} placeholder="100-200字"/><br/><br/>
                商品一口价：<InputNumber prefix="￥" style={{width: '10%'}} size={"small"}/><br/><br/>
                商品归类：<Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={selectItems}/><br/><br/>
                库存剩余：<InputNumber min={1} max={9999} defaultValue={50} onChange={onChange}/><br/><br/>
                是否参加活动：<Radio.Group onChange={onRadioChange} value={value}>
                <Radio value={1}>是</Radio>
                <Radio value={2}>否</Radio>
            </Radio.Group><br/><br/>
                <Button type="primary">发布商品</Button>
                <Button danger>清空输入</Button>
            </div>
        </Fragment>
    )
}

export default Release;