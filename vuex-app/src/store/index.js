import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// load vuex 


export default new Vuex.Store({
    modules : {
        todos
    }
});

