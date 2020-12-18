import { action, thunk } from 'easy-peasy';
import axios from 'axios';

export const posts = {
	items: [],
	isLoading: true,

	setPosts: action((state, payload) => {
		state.items = payload;
		state.isLoading = false;
	}),
	getAll: thunk(async (actions) => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => actions.setPosts(res.data));
	}),
};