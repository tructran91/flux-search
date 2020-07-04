import ActionType from "../actions/ActionType";
import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from "events";
import { removeListener } from "process";
import API from "../api"

const CHANGE_EVENT = "CHANGE";
let _data = [];

class DataStore extends EventEmitter {
    constructor() {
        super();
        AppDispatcher.register(this.registerActions.bind(this))
    }

    registerActions(action) {
        switch (action.actionType) {
            case ActionType.SEARCH_DATA:
                API.searchDataOnline(action.textSearch);
                this.emit(CHANGE_EVENT);
                break;
            case ActionType.SHOW_DATA_RESULTS:
                this.setDataResults(action.dataset)
                this.emit(CHANGE_EVENT);
                break;
        }
    }

    setDataResults(data) {
        _data = data;
    }

    getDataResults() {
        return _data;
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        removeListener(CHANGE_EVENT, callback);
    }
}

export default new DataStore();