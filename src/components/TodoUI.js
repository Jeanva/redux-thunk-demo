import React from 'react';
import { Button,Input,List } from 'antd';

const TodoUI = (props)=>{
    return(
        <div>
            <div style={{width:'500px',margin:'20px auto',display:'flex'}}>
                <Input 
                    value={props.inputValue} 
                    onChange={props.handleOnChange.bind(this)} 
                />
                <Button 
                    type='primary' 
                    onClick={props.handleSubmit.bind(this)}
                >提交</Button>
            </div>
            <List 
                dataSource = {props.dataSource}
                style={{width:'500px',margin:'auto'}}
                renderItem={(item,index)=>(
                    <List.Item onClick={()=>props.handleDeleteItem(index)}>{item}</List.Item>
                )}
            />
        </div>
        )
}
export default TodoUI;