import { action, thunk } from 'easy-peasy';
import axios from 'axios';

export const users = {
	items: [],
	isLoading: true,

	setUsers: action((state, payload) => {
		state.items = payload;
		state.isLoading = false;
	}),
	getAll: thunk((actions) => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((res) =>
				res.data.map((user) => {
					return {
						...user,
						avatar: `https://i.pravatar.cc/150?u=${user.id}`,
					};
				}),
			)
			.then((data) => actions.setUsers(data));
	}),
};
