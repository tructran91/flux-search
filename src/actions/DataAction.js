import ActionType from "./ActionType";
import AppDispatcher from '../AppDispatcher';

class DataAction{
    searchData(textSearch){
        AppDispatcher.dispatch({
            actionType: ActionType.SEARCH_DATA,
            textSearch: textSearch
        })
    }

    showDataResults(dataset){
        AppDispatcher.dispatch({
            actionType: ActionType.SHOW_DATA_RESULTS,
            dataset: dataset
        })
    }
}

export default new DataAction();