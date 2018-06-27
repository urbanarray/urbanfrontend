// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { ADD_RESOURCES_ACTION } from "./constants";
import { addResourcesAction } from "./actions";
import makeSelectResources from "./selectors";
import { addResourcesApi} from "./api";


// Individual exports for testing
export function* create() {
	try{

	  const { addResources } = yield select(makeSelectResources());
	  const response = yield call(addResourcesApi,addResources);
	  console.log(response)
	  yield put(addedResourcesAction(response.data));
	} catch(error) {
		console.log(error)
	}

}

export default function* defaultSaga(){

	yield takeLatest(ADD_RESOURCES_ACTION, create);

}