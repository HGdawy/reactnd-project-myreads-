import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BooksApp from './App'
import './index.css'

localStorage.setItem("data",[])


ReactDOM.render(
    <BrowserRouter><BooksApp/></BrowserRouter>, 
    document.getElementById('root'))