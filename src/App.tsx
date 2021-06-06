import './App.scss';
// import Axios from 'axios';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import axios from 'axios';
import { useEffect } from 'react';

const App = () => {

    // useEffect(() => {
    //     axios.get('/api/test')
    //       .then(res => console.log(res))
    //   })

    
  	
    return (
            <div className="wrap">
                <Header />
                <Nav />
                <main>
                    {/* <input {...name} placeholder = 'Whats your name?'/> */}
                    <Content />
                </main>
                <Footer />
            </div>
    );
}

export default App;

// function useInput(defaultValue) {
//     const [value, setValue] = useState<any>(defaultValue);

//     const onchange = e => {
//         const {
//             target: { value }
//         } = e;
//         setValue(value, onChange);
//     };

//     return {};
// }


// function useFetch(url) {
//     const [count, setCount] = useState<number>(0);
//     const onIncrease = () => setCount(count + 1);
//     const onDecrease = () => setCount(count - 1);
//     return (
//       <div>
//         <h1>{count}</h1>
//         <div>
//           <button onClick={onIncrease}>+1</button>
//           <button onClick={onDecrease}>-1</button>
//         </div>
//       </div>
//     );

//     const [payload, setPayload] = useState<any>(null);
//     const [loading, setLoading] = useState<any>(true);
//     const [error, setError] = useState<string>("");

//     const callUrl = async() => {
//         try {
//             const data = await Axios.get(url);
//         } catch {
//             setError('error');
//         } finally {
//             setLoading(false);
//         }
//         return (payload, loading, error);
//     }

//   }
  
//   export default Counter;

// function useFetch(url) {
//     const [payload, setPayload] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

// }

// const App = () => {
//     return (
//         <div>
//             <Header />
//             <Content />
//         </div>
//         // <div className='App'>
//         //     <header className='App-header'>
//         //         <p>
//         //             Edit <code>src/App.tsx</code> and save to reload.
//         //         </p>
//         //         <a
//         //             className='App-link'
//         //             href='https://reactjs.org'
//         //             target='_blank'
//         //             rel='noopener noreferrer'>
//         //             Learn React
//         //         </a>
//         //     </header>
//         // </div>
//     );
// }
