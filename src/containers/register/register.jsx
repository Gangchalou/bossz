/*注册组件*/
import React, {Component} from 'react'
import {WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'
const RadioItem = Radio.RadioItem;


export default class Register extends Component {
  render() {
    return (
      <div>
        <Logo/>
          <WingBlank>
            <List>
              <InputItem>用户名：</InputItem>
              <WhiteSpace/>
              <InputItem type='password'>密码：</InputItem>
                <WhiteSpace/>
              <InputItem type='password'>确认密码：</InputItem>
                <WhiteSpace/>
              <RadioItem>牛人</RadioItem>
              <RadioItem checked={true}>BOSS</RadioItem>
                <WhiteSpace/>
              <Button type='primary'>注册</Button>
              <Button >已有账号</Button>
            </List>
          </WingBlank>
      </div>
    )
  }
}
