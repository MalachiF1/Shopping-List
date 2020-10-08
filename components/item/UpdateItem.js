import { useState, useEffect } from 'react';
import Checkbox from 'rc-checkbox';
import { updateItem } from '../../actions/item';
import { getCookie } from '../../actions/auth';
import eventHub from '../../helpers/eventHub';

const UpdateItem = ({ item, updateParent }) => {
	const [token, setToken] = useState('');
	const [values, setValues] = useState({
		name: '',
		amount: 0,
		urgent: false,
		note: '',
		error: false,
		success: false,
		loading: false,
	});

	const { name, amount, urgent, note, error, success, loading } = values;

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		setToken(getCookie('token'));
		setValues({
			...values,
			name: item.name,
			amount: item.amount,
			urgent: item.urgent,
			note: item.note,
		});
	};

	const handleChange = type => e => {
		let value = e.target.value;
		if (type === 'urgent') {
			if (document.getElementById('updateUrgent' + name).checked) {
				value = true;
			} else {
				value = false;
			}
		}
		setValues({ ...values, [type]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setValues({ ...values, loading: true });
		updateItem(
			{
				slug: item.slug,
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
			}
			setValues({
				...values,
				name: data.name,
				amount: data.amount,
				urgent: data.urgent,
				note: data.note,
				success: true,
				loading: false,
				error: false,
			});
			updateParent(values);
			let popup = document.getElementById(item.name + 'Popup');
			popup.style.display = 'none';
			eventHub.trigger('itemUpdated');
		});
	};

	const closePopup = () => {
		let popup = document.getElementById(item.name + 'Popup');
		popup.style.display = 'none';
		setValues({
			...values,
			error: false,
			success: false,
			loading: false,
		});
	};

	window.addEventListener('click', e => {
		let popup = document.getElementById(item.name + 'Popup');
		if (e.target === popup) {
			popup.style.display = 'none';
			setValues({
				...values,
				error: false,
				success: false,
				loading: false,
			});
		}
	});

	const showError = () => (
		<div className='alert alert-danger mt-1, placeCenter' style={{ display: error ? '' : 'none' }}>
			{error}
		</div>
	);

	const showSuccess = () => (
		<div className='alert alert-success mt-3 placeCenter' style={{ display: success ? '' : 'none' }}>
			Item Updated
		</div>
	);

	const showLoading = () => (
		<div className='alert alert-info mt-1 placeCenter mt-3' style={{ display: loading ? '' : 'none' }}>
			Loading...
		</div>
	);

	return (
		<div className='popup-content'>
			<div style={{ paddingBottom: '40px' }}>
				<span className='close' onClick={closePopup}>
					x
				</span>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='pb-2 pt-1 placeCenter'>
					<label style={{ display: 'flex' }}>
						<span style={{ flexDirection: 'left' }}>Name: </span>
						<input
							style={{ flexDirection: 'right' }}
							type='text'
							placeholder='Update Name'
							value={name}
							className='form-control ml-2'
							onChange={handleChange('name')}
							required={true}
						/>
					</label>
				</div>
				<div className='pb-2 pt-1 placeCenter'>
					<label style={{ display: 'flex' }}>
						<span style={{ flexDirection: 'left' }}>Amount: </span>
						<input
							style={{ flexDirection: 'right' }}
							type='number'
							step='0.001'
							placeholder='Update Amount'
							min='0.001'
							value={amount}
							className='form-control ml-2'
							onChange={handleChange('amount')}
							required={true}
						/>
					</label>
				</div>
				<div className='pb-2 pt-1 placeCenter'>
					<label style={{ display: 'flex' }}>
						<span style={{ flexDirection: 'left' }}>Note: </span>
						<input
							style={{ flexDirection: 'right' }}
							type='text'
							placeholder='Update Note'
							value={note}
							className='form-control ml-2'
							onChange={handleChange('note')}
						/>
					</label>
				</div>
				<div className='pb-2 pt-1'>
					<label style={{ display: 'flex', placeContent: 'center', placeItems: 'center' }}>
						<Checkbox id={'updateUrgent' + name} checked={urgent} onChange={handleChange('urgent')} />
						<span className='pl-1 pb-1'>Urgent</span>
					</label>
				</div>
				<div className='pb-1 pt-1 placeCenter'>
					<button type='submit' className='btn btn-primary mt-3'>
						Update
					</button>
				</div>
				{
					<div className='placeCenter'>
						{showError()}
						{showLoading()}
					</div>
				}
			</form>
		</div>
	);
};

export default UpdateItem;
