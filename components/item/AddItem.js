import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useState, useEffect } from 'react';
import { createItem, searchHistory } from '../../actions/item';
import { getCookie } from '../../actions/auth';
import Checkbox from 'rc-checkbox';
import eventHub from '../../helpers/eventHub';
import moment from 'moment';

const AddItem = () => {
	const [token, setToken] = useState('');
	const [history, setHistory] = useState([]);
	const [windowSize, setwindowSize] = useState(0);
	const [values, setValues] = useState({
		name: '',
		amount: 1,
		note: '',
		urgent: false,
		error: false,
		success: false,
		loading: false,
	});

	const { name, amount, note, urgent, error, success, loading } = values;

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		setToken(getCookie('token'));
		setwindowSize(window.innerWidth);
	};

	if (process.browser) {
		window.addEventListener('resize', () => {
			setwindowSize(window.innerWidth);
		});
	}

	const hideSuggestions = () => {
		setHistory([]);
	};

	const handleChange = type => e => {
		let value = e.target.value;
		if (type === 'urgent') {
			value = document.getElementById('urgent-checkbox').checked;
		}
		if (type === 'name') {
			getSuggestions(value);
		}
		setValues({ ...values, [type]: value, error: false, success: false, loading: false });
	};

	const getSuggestions = search => {
		if (search.trim().length > 0) {
			searchHistory({ search }, token)
				.then(data => {
					if (data.length > 5) {
						let lastHistory = data
							.sort(
								(a, b) =>
									parseInt(new moment(b.updatedAt).format('YYYYMMDDhhmmss')) -
									parseInt(new moment(a.updatedAt).format('YYYYMMDDhhmmss'))
							)
							.slice(0, 5);
						setHistory(lastHistory);
					} else {
						setHistory(data);
					}
				})
				.catch(err => console.log(err));
		} else {
			setHistory([]);
		}
	};

	const showSuggestions = (history = []) => {
		return (
			<div className='bg-white' style={{ width: '13rem', borderRadius: '3px', marginTop: '1px' }}>
				{history.map((item, i) => {
					return (
						<div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
							<a onClick={() => fillSuggestion(item)} className='text-primary ml-2'>
								{item.name}
							</a>
						</div>
					);
				})}
			</div>
		);
	};

	const fillSuggestion = item => {
		setValues({
			name: item.name,
			amount: item.amount,
			note: item.note,
			urgent: item.urgent,
		});
		let checkbox = document.getElementById('urgent-checkbox');
		checkbox.checked = item.urgent;
		setHistory([]);
	};

	const handleSubmit = () => {
		setValues({ ...values, loading: true });
		createItem(
			{
				name: name,
				amount: amount,
				urgent: urgent,
				note: note,
			},
			token
		).then(data => {
			if (data.error) {
				console.log('data.error', data.error);
				setValues({ ...values, error: data.error, loading: false });
			} else {
				setValues({
					...values,
					name: '',
					amount: 1,
					urgent: false,
					note: '',
					error: false,
					success: true,
					loading: false,
				});
				setHistory([]);
				eventHub.trigger('itemAdded');
			}
		});
	};

	const showError = () => (
		<div className='alert alert-danger mt-1' style={{ display: error ? '' : 'none' }}>
			{error}
		</div>
	);

	const showSuccess = () => (
		<div className='alert alert-success mt-1' style={{ display: success ? '' : 'none' }}>
			Item added
		</div>
	);

	const showLoading = () => (
		<div className='alert alert-info mt-1' style={{ display: loading ? '' : 'none' }}>
			Loading...
		</div>
	);

	let defaultMargin;
	if (windowSize > 520) {
		defaultMargin = 20;
	} else if (windowSize > 300) {
		defaultMargin = 5;
	} else {
		defaultMargin = 0;
	}

	let suggestionLeft;
	if (windowSize > 1840) {
		suggestionLeft = 55;
	} else if (windowSize > 900) {
		suggestionLeft = 49;
	} else if (windowSize > 520) {
		suggestionLeft = 53;
	} else if (windowSize > 260) {
		suggestionLeft = 49;
	} else {
		suggestionLeft = 45;
	}

	let windowSizeModifire = windowSize > 520 ? 1 : 2;
	let marginPer = windowSize > 520 ? history.length * 25 : history.length * 40;
	let marginForSuggestion = marginPer / windowSizeModifire + defaultMargin + 'px';

	return (
		<form className='dropdown__addItem__form'>
			<div
				className='dropdown__addItem__input'
				style={{ position: 'relative', padding: '0px' }}
				id='name-input-container'
			>
				<label className='row mb-0' style={{ position: 'relative' }}>
					<span style={{ display: 'grid', placeContent: 'center' }}>Name:</span>
					<input
						id='name-input'
						onChange={handleChange('name')}
						type='text'
						value={name}
						maxLength='20'
						className='form-control dropdown__addItem__input__field'
					/>
					{history.length > 0 && (
						<div
							style={{
								position: 'absolute',
								top: '100%',
								left: suggestionLeft,
							}}
						>
							{showSuggestions(history)}
						</div>
					)}
				</label>
			</div>
			<div
				className='dropdown__addItem__input'
				style={{ position: 'relative', marginTop: marginForSuggestion }}
				onClick={hideSuggestions}
			>
				<label className='row'>
					<span style={{ display: 'grid', placeContent: 'center' }}>Amount:</span>
					<input
						onChange={handleChange('amount')}
						type='number'
						step='0.001'
						value={amount}
						min='0.001'
						className='form-control dropdown__addItem__input__field'
					/>
				</label>
			</div>
			<div className='dropdown__addItem__input' style={{ padding: '0px' }} onClick={hideSuggestions}>
				<label className='row'>
					<span style={{ display: 'grid', placeContent: 'center' }}>Note:</span>
					<input
						onChange={handleChange('note')}
						type='text'
						value={note}
						maxLength='40'
						className='form-control dropdown__addItem__input__field'
					/>
				</label>
			</div>
			{windowSize > 400 && (
				<div>
					<div
						className='dropdown__addItem__input'
						id='dropdown__addItem__checkbox'
						onClick={hideSuggestions}
					>
						<label style={{ display: 'flex', placeContent: 'center', placeItems: 'center' }}>
							<Checkbox id='urgent-checkbox' checked={urgent} onChange={handleChange('urgent')} />
							<span className='pl-1 pb-1'>Urgent</span>
						</label>
					</div>
					<div className='dropdown__addItem__input__btn mt-0' onClick={handleSubmit}>
						<IconButton>
							<AddShoppingCartIcon />
						</IconButton>
					</div>
				</div>
			)}
			{windowSize <= 400 && (
				<div className='row'>
					<div
						className='dropdown__addItem__input mr-2'
						id='dropdown__addItem__checkbox'
						onClick={hideSuggestions}
					>
						<label style={{ display: 'flex', placeContent: 'center', placeItems: 'center' }}>
							<Checkbox id='urgent-checkbox' checked={urgent} onChange={handleChange('urgent')} />
							<span className='pl-1 pb-1'>Urgent</span>
						</label>
					</div>
					<div className='dropdown__addItem__input__btn mt-0 ml-2' onClick={handleSubmit}>
						<IconButton>
							<AddShoppingCartIcon />
						</IconButton>
					</div>
				</div>
			)}

			<div>
				{showSuccess()}
				{showError()}
				{showLoading()}
			</div>
		</form>
	);
};

export default AddItem;
