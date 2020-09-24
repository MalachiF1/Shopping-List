import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { handleResponse } from './auth';
import Router from 'next/router';
import queryString from 'query-string';

export const createItem = (item, token) => {
	return fetch(`${API}/create-item`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(item),
	})
		.then(response => {
			handleResponse(response);
			return response.json();
		})
		.catch(err => console.log(err));
};

export const getItems = token => {
	return fetch(`${API}/list`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then(response => {
			handleResponse(response);
			return response.json();
		})
		.catch(err => console.log(err));
};

export const updateItem = (item, token) => {
	return fetch(`${API}/update-item`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(item),
	})
		.then(response => {
			handleResponse(response);
			return response.json();
		})
		.catch(err => console.log(err));
};

export const removeItem = (slug, token) => {
	return fetch(`${API}/delete-item`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(slug),
	})
		.then(response => {
			handleResponse(response);
			return response.json();
		})
		.catch(err => console.log(err));
};

export const listSearch = (params, token) => {
	let query = queryString.stringify(params);
	return fetch(`${API}/search?${query}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then(response => {
			handleResponse(response);
			return response.json();
		})
		.catch(err => console.log(err));
};

export const searchHistory = (params, token) => {
	let query = queryString.stringify(params);
	return fetch(`${API}/search-history?${query}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then(response => {
			handleResponse(response);
			return response.json();
		})
		.catch(err => console.log(err));
};
