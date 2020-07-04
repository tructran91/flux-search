import DataAction from './actions/DataAction';
import $ from "jquery";

class API {
    searchDataOnline(textSearch) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos/${textSearch}`,
            dataType: 'json',
            cache: false,
            success(data) {
                DataAction.showDataResults(data);
            },
            error(xhr, status, err) {
                alert(err);
            }
        });
    }
}
export default new API();