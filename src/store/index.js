import { createStore} from "redux";


const recuderfn = (state = {counter:1},actions) => {
    if(actions.type==="inc") {
        console.log(state.counter)
        return {counter:state.counter+1}
    }
    if(actions.type==="dec") {
        return {counter:state.counter-1}
    }
    if(actions.type === "add") {
        return {counter:state.counter+actions.payload}
    }

    return state
}

const store = createStore(recuderfn)

export default store 