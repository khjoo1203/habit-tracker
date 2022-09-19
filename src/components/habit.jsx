import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    componentDidMount() {
        console.log(`habit: ${this.props.habit.name} mounted`);
    }
    componentWillUnmount() {
        console.log(`habit: ${this.props.habit.name} will unmount`);
    }
    handleIncrement = () => {
        //state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트 해야 함.
        //this.setState( {count: this.state.count + 1 });
        this.props.onIncrement(this.props.habit);

    };
    handleDecrement = () => {
        // const count = this.state.count - 1
        // this.setState({ count: count<0 ? 0 : count });
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };
    render() {
        // console.log(this.props.habit);
        const { name } = this.props.habit;
        const { count } = this.props;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button className="habit-button habit-delete"
                    onClick={this.handleDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </li>
        );
    }
}

export default Habit;