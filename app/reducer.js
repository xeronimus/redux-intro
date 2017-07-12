export default function reducer(state, action) {

    switch (action.type) {

        case 'ADD_TODO':

            const newTodos = [
                ...state.todos,
                action.name,
            ];

            return {
                ...state,
                todos: newTodos
            };


        default:
            return state;
    }

};