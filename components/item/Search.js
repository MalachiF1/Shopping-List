import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/item';
import { getCookie } from '../../actions/auth';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';

const Search = ({ updateParent }) => {
	const [token, setToken] = useState('');
	const [values, setValues] = useState({
		search: undefined,
		results: [],
		searched: false,
		message: '',
	});

	const { search, results, searched, message } = values;

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		setToken(getCookie('token'));
	};

	const searchSubmit = e => {
		e.preventDefault();
		listSearch({ search }, token).then(data => {
			if (data.length === 1) {
				setValues({
					...values,
					results: data,
					searched: true,
					message: `${data.length} item found`,
				});
			} else {
				setValues({
					...values,
					results: data,
					searched: true,
					message: `${data.length} items found`,
				});
			}

			updateParent(data, true);
		});
	};

	const handleChange = e => {
		setValues({ ...values, search: e.target.value, searched: false, results: [] });
		if (!e.target.value) {
			updateParent([], false);
		}
	};

	const searchForm = () => (
		<form onSubmit={searchSubmit}>
			<div className='row main__filters__search'>
				<div onClick={searchSubmit} className='placeCenter'>
					<IconButton>
						<SearchIcon />
					</IconButton>
				</div>
				<div style={{ display: 'grid', placeContent: 'center' }}>
					<input
						type='search'
						className='main__filters__search__searchbar'
						placeholder='Search items'
						onChange={handleChange}
					/>
				</div>
			</div>
		</form>
	);

	return (
		<div className='container-fluid'>
			<div>{searchForm()}</div>
		</div>
	);
};

export default Search;
