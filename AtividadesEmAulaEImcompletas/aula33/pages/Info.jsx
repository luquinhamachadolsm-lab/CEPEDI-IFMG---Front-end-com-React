import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Info() {
    const {firstname } = useParams();
    return <h1>Hello, {firstname}!</h1>
}

export default Info