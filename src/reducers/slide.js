import {
	SLIDE_FETCH
} from 'actions/slide'

function reducer(state = {
}, action) {
	switch (action.type) {
		case SLIDE_FETCH:
			{
				return Object.assign({}, state, {
					password:action.password,
					data:action.data
				})
			}
		default:
			return state
	}
}

export default reducer
