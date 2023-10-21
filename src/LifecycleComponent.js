import React from 'react';
import axios from 'axios'


class LifecycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            leeds: []
        };
        this.incrementCount = this.incrementCount.bind(this);
    }

    componentWillUnmount() {

        console.log('Компонент удален из DOM');

    }

    fetchData = async () => {
        try {
            const leeds = await axios.get('https://todo-redev.herokuapp.com/api-docs/');
            this.setState({ leeds: leeds.data });
            console.log(this.state.leeds)
        } catch (error) {
            console.log("Ошибка при получении данных:", error);
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    incrementCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count % 2 === 0
    }

    componentDidUpdate() {
        console.log(this.state.count);
    }


    render() {
        return (
            <div>
                <p>Счетчик: {this.state.count}</p>
                <button onClick={this.incrementCount}>Увеличить</button>
            </div>
        );
    }
}
export default LifecycleComponent;