import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useState, useEffect } from 'react';
import { createItem } from '../../actions/item';
import { getCookie } from '../../actions/auth';
import Checkbox from 'rc-checkbox';
import eventHub from '../../helpers/eventHub';

const AddItem = () => {
	const [token, setToken] = useState('');
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
	};

	const handleChange = name => e => {
		let value;
		value = e.target.value;
		if (name === 'urgent') {
			value = document.getElementById('urgent-checkbox').checked;
		}
		setValues({ ...values, [name]: value, error: false, success: false, loading: false });
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

	return (
		<form className='dropdown__addItem__form'>
			<div className='dropdown__addItem__input'>
				<label>
					<span>Name:</span>
					<input
						onChange={handleChange('name')}
						type='text'
						value={name}
						maxLength='20'
						className='dropdown__addItem__input__field'
					/>
				</label>
			</div>
			<div className='dropdown__addItem__input'>
				<label>
					<span>Amount:</span>
					<input
						onChange={handleChange('amount')}
						type='number'
						value={amount}
						min='1'
						className='dropdown__addItem__input__field'
					/>
				</label>
			</div>
			<div className='dropdown__addItem__input'>
				<label>
					<span>Note:</span>
					<input
						onChange={handleChange('note')}
						type='text'
						value={note}
						maxLength='40'
						className='dropdown__addItem__input__field'
					/>
				</label>
			</div>
			<div className='dropdown__addItem__input'>
				<label style={{ display: 'flex', placeContent: 'center', placeItems: 'center' }}>
					<Checkbox
						id='urgent-checkbox'
						checked={urgent}
						onChange={handleChange('urgent')}
					/>
					<span className='pl-1 pb-1'>Urgent</span>
				</label>
			</div>
			<div className='dropdown__addItem__input__btn mt-0' onClick={handleSubmit}>
				<IconButton>
					<AddShoppingCartIcon />
				</IconButton>
			</div>
			<div>
				{showSuccess()}
				{showError()}
				{showLoading()}
			</div>
		</form>
	);
};

export default AddItem;
