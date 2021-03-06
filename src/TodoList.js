import React,{Component} from 'react';
// import store from './store';
import {connect} from 'react-redux';

const TodoList = (props)=>{
    const {inputValue,changeInputValue,handleClick,list} = props;
    return (
        <div>
            <div>
                <input 
                value={inputValue}
                onChange={changeInputValue}
                    />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                <li>hello</li>
                {list.map((item,index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}
// class TodoList extends Component{
//     render(){
//         const {inputValue,changeInputValue,handleClick,list} = this.props;
//         return (
//             <div>
//                 <div>
//                     <input 
//                     value={inputValue}
//                     onChange={changeInputValue}
//                      />
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                     <li>hello</li>
//                     {list.map((item,index) => {
//                         return <li key={index}>{item}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }
const mapStateToProps=(state)=>{
    return {
        inputValue : state.inputValue,
        list : state.list
    }
}   
// 把 store.dispatch 到 props
const mapDispatchToProps = (dispatch) =>{
    return {
        changeInputValue(e){
            console.log(e.target.value);
            const action = {
                type:'change_input_value',
                value:e.target.value
            }
            dispatch(action);
        },
        handleClick(){
            const action = { type:'add_item'}
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);