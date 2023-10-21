import React, { useState, useEffect } from "react";
import axios from 'axios';

const FuncLifecycleComponent = () => {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(0)
    const [leeds, setDocs] = useState([]);

    const incrementCount = () => {
        setCount(count + 1)
    }
    // указано за чем следить, отображается при каждом обновление
    useEffect(() => {
        if (count % 2 != 0) {
            console.log(`component did update ${count}`)
        } if (count % 2 === 0) {
            console.log(`component did update четное ${count}`)
        }

    }, [count]);

    const fetchData = async () => {
        try {
            leeds = await axios.get('https://todo-redev.herokuapp.com/api-docs/');
            setDocs(leeds.data)
        } catch (error) {
            console.log("Ошибка при получении данных:", error);
        }
    };

    // пустой массив, появляется единожды
    // не указан массив вообще, появляется прикаждлм обновление стр.
    useEffect(() => {
        console.log("вот такие :", { leeds });
        return () =>
            console.log('will unmount');
    }, []);

    return (
        <div>
            <p>Счетчик: {count}</p>
            {/* <p>Время: {this.state.time} секунд</p>  */}

            <button onClick={incrementCount}>Увеличить</button>
        </div>

    )


}
// class
//     this.state = {
//         count: 0,
//         time: 0,
//         docs: []
//       };
//       this.incrementCount = this.incrementCount.bind(this);
//     }

//     componentDidMount() {
//       this.fetchData();
//       this.timerID = setInterval(() => {
//         this.setState((prevState) => ({
//           time: prevState.time + 1
//         }));
//       }, 1000);
//     }

//     componentWillUnmount() {
//       clearInterval(this.timerID);
//       console.log('Компонент удален из DOM');
//     }

//     fetchData = async () => {
//       try {
//         const response = await axios.get('https://todo-redev.herokuapp.com/api-docs/');
//         this.setState({docs: response.data});
//         console.log("вот такие :", response.data);
//       } catch (error) {
//         console.log("Ошибка при получении данных:", error);
//       }
//     };

//     incrementCount() {
//       this.setState((prevState) => ({
//         count: prevState.count + 1
//       }));
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count) {
//           console.log(this.state.count);
//         }
//       }
//       shouldComponentUpdate(nextProps, nextState) {
//         return nextState.count % 2 === 0;
//       }
//     render() {
//     //   const {docs} = this.state;
//       return (
//         <div>
//           <p>Счетчик: {this.state.count}</p>
//           <p>Время: {this.state.time} секунд</p>
//           {/* {docs.map((doc, index) => <h1 key={index}>{doc.type}</h1>)} */}
//           <button onClick={this.incrementCount}>Увеличить</button>
//         </div>
//       );
//     }
//   }
// function
// const incrementCount = () => {
//     setState((prevState) => ({
//       count: prevState.count + 1
//     }));
//   }


//   useEffect(() => {     
//    fetchData ();
//    const timerID = setInterval;
//    const setInterval = () => {
//       setState((prevState) => ({
//         time: prevState.time + 1
//       }));
//     }, 1000);}, [])


//     useEffect(() => (  ) => {
//         clearInterval(this.timerID);
//         console.log('Компонент удален из DOM')
//     })


// const fetchData = async () => {
//   try {
//     const response = await axios.get('https://todo-redev.herokuapp.com/api-docs/');
//     setState({docs: response.data});
//     console.log("вот такие :", response.data);
//   } catch (error) {
//     console.log("Ошибка при получении данных:", error);
//   }
// };


// componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log(this.state.count);
//     }
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.count % 2 === 0;
//   }

//   const {docs} = this.state;


export default FuncLifecycleComponent;