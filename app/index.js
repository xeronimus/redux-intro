import {bindActionCreators} from 'redux';
import store from './store';
import actions from './actions';

const boundedActions = bindActionCreators(actions, store.dispatch);

// ----- on state change, rerender the ui and pass on state to components
store.subscribe(() => {
    console.log('rerender view, since state changed');
    console.dir(store.getState());
});


// ----- dispatch any action from anywhere : user input, schedule, server-sent events / websockets, etc.
store.dispatch({
    type: 'ADD_TODO',
    name: 'Ping-Pong'
});


boundedActions.addTodo('Bowling');
