import React, { createContext, useReducer, useContext } from 'react';

const UPDATE_BOOKS = 'UPDATE_BOOKS';
const REMOVE_BOOK = 'REMOVE_BOOK';
const SET_CURRENT_BOOK = 'SET_CURRENT_BOOK';
const ADD_BOOK = 'ADD_BOOK';
const LOADING = 'LOADING';
const ADD_SAVED = 'ADD_SAVED';
const REMOVE_SAVED = 'REMOVE_SAVED';
const UPDATE_SAVED = 'UPDATE_SAVED';

const StoreContext = createContext();
const {Provider} = StoreContext;

const reducer = (state, action) => {
    switch (action.type){
        case SET_CURRENT_BOOK:
            return {
                ...state,
                currentPost: action.book,
                loading: false
            };
        case UPDATE_BOOKS:
            return {
                ...state,
                books: [...action.books],
                loading: false
            };
        case ADD_BOOK:
            return {
                ...state,
                books: [action.books, ...state.books],
                loading: false
            };
        case REMOVE_BOOK:
            return {
                ...state,
                books: state.books.filter((book) => {
                    return book._id !== action._id;
                })
            };
        case ADD_SAVED:
            return{
                ...state,
                saved: [actions.book, ...state.saved],
                loading: false
            };
        case UPDATE_SAVED:
            return {
                ...state,
                saved: [...state.saved],
                loading: false
            };
        case REMOVE_SAVED:
            return {
                ...state,
                saved: state.saved.filter((book) => {
                    return book._id !== action._id;
                })
            };
        case LOADING:
            return{
                ...state,
                loading: true;
            };
        default: 
            return state;
    }
};
const StoreProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        books: [],
        currentBook: {
            _id: 0,
            title: "",
            author: "",
            description: "",
            link: "",
            image: "",
            date: "",
        }, 
        saved: [],
        loading: false
    });
    
    return <Provider value = {state, dispatch} {...props} />
};
const useStoreContext = () => {
    return useContext (StoreContext);
};

export { StoreProvider, useStoreContext}