import React, { Component } from 'react';
import './App.scss';
import Header from './components/layout/header';
import Content from './components/layout/content';
import Nav from './components/layout/nav';

const App = () => {
    return (
            <div className="wrap">
                <Header />
                <Nav />
                <main>
                    <Content />
                </main>
            </div>
    );
}

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

export default App;
