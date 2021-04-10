import React, {Component} from 'react';
import {connect} from "react-redux";

// action은 항상 이렇게 import 해주어야함.
import {categoryRead} from "../store/category/actions";

class Category extends Component {
    // render()가 끝나고 실행되는 부분.
    componentDidMount() {
        this.props.categoryRead(); // 데이터를 불러오는 action(categoryRead)를 실행시킴.
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>학년</th>
                        <th>학기</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* javascript의 프로토타입 map으로 반복문으로 생각하면 편함. */}
                    {this.props.lists.map(item => (
                        <tr key={item.id}>
                            <td>{item.year}</td>
                            <td>{item.semester}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

// reducers.js에서 건너온 초기값 모음.
const mapStateToProps = state => ({
    lists: state.category.lists,
});

// actions.js에서 건너온 action들 모음.
const mapDispatchToProps = dispatch => ({
    categoryRead: () => dispatch(categoryRead()),
});

// 위의 mapStateToProps, mapDispatchToProps의 초기값 및 aciton 들을 class Category에 연결.
export default connect(mapStateToProps, mapDispatchToProps)(Category);