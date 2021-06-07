//const { createStore } = require("redux"); en react
const createStore = require('redux').createStore; //para node
const combineReducers = require('redux').combineReducers
    //########ACTIONS
const BUY_POKEMON = 'BUY_POKEMON' //tipo de accion
const RETURN_POKEMON = 'RETURN_POKEMON'
const BUY_YOSHI = 'BUY_YOSHI'
const RETURN_YOSHI = 'RETURN_YOSHI'

//la acciom  es una funcion que regresa un bjeto
const buy_pokemon_action = (cant) => { //acccion en si
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}

const buy_yoshi_action = (cant) => {
    return {
        type: BUY_YOSHI,
        payload: cant
    }
}
const return_yoshi_action = (cant) => {
    return {
        type: RETURN_YOSHI,
        payload: cant
    }
}

const BUY_SWITCH = 'BUY_SWITCH' //tipo de accion
const BUY_PS5 = 'BUY_PS5' //tipo de accion

const buy_switch_action = (cant) => {
    return {
        type: BUY_SWITCH,
        payload: cant
    }
}

const buy_ps5_action = (cant) => {
        return {
            type: BUY_PS5,
            payload: cant
        }
    }
    //########REDUCERS
    //reducrs  tienes q tener uns atado incicial
const default_games_state = {
        pokemon: 10,
        yoshi: 10
    }
    //recibe un estado, action (cuando se ejecute la acc se envia al reducer, y este repartira trab)
const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON:
            {
                return {
                    ...state,
                    pokemon: state.pokemon - action.payload //para obtener estao prv
                }
            }
        case RETURN_POKEMON:
            {
                return {
                    ...state,
                    pokemon: state.pokemon + action.payload
                }
            }
        case BUY_YOSHI:
            {
                return {
                    ...state,
                    yoshi: state.yoshi - action.payload //para obtener estao prv
                }
            }
        case RETURN_YOSHI:
            {
                return {
                    ...state,
                    yoshi: state.yoshi + action.payload
                }
            }
        default:
            return state;
    }
}


const default_consoles_state = {
    ps5: 10,
    switch: 10
}


const consoles_reducer = (state = default_consoles_state, action) => {
    switch (action.type) {
        case BUY_PS5:
            return {
                ...state,
                ps5: state.ps5 - action.payload
            }
        case BUY_SWITCH:
            return {
                ...state,
                ps5: state.switch-action.payload
            }
        default:
            return state;
    }
}

const rootReducers = combineReducers({
        games_reducer,
        consoles_reducer
    })
    //########STORE
    //  const store = createStore(games_reducer);  //solo con un reduce
const store = createStore(rootReducers); //mas de un reduce , usamos combineReudcers


console.log('Esado inicial: ', store.getState());
store.subscribe(() => {
        console.log("cambio de estado: ", store.getState())
    })
    //el store dispara sus mesajes y     llaman distpatch
store.dispatch(buy_pokemon_action(2)); //envio la accion por medio de 
store.dispatch(return_pokemon_action(1));
store.dispatch(buy_yoshi_action(9));
store.dispatch(return_yoshi_action(8));
store.dispatch(buy_ps5_action(8));