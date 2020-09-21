import moment from 'moment';
import { updateItem, removeItem } from '../../actions/item';
import CreateIcon from '@material-ui/icons/Create';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from 'rc-checkbox';
import { IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getCookie } from '../../actions/auth';

const ItemCard = ({ item, updateParent }) => {
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
	const [newNote, setNewNote] = useState('');

	const { name, amount, urgent, note, error, success, loading } = values;

	const init = () => {
		setToken(getCookie('token'));
		setValues({
			...values,
			name: item.name,
			amount: item.amount,
			urgent: item.urgent,
			note: item.note,
		});
		setNewNote(item.note);
	};

	useEffect(() => {
		init();
	}, []);

	const plusAmount = () => {
		setValues({
			...values,
			amount: amount + 1,
		});
		updateItem(
			{
				slug: item.slug,
				amount: amount + 1,
			},
			token
		);
	};

	const minusAmount = () => {
		if (amount === 1) {
			removeItem(
				{
					slug: item.slug,
				},
				token
			);
			updateParent(item, 'remove');
		} else {
			setValues({
				...values,
				amount: amount - 1,
			});
			updateItem(
				{
					slug: item.slug,
					amount: amount - 1,
				},
				token
			);
		}
	};

	const toggleUrgent = () => {
		setValues({
			...values,
			urgent: !urgent,
		});
		updateItem(
			{
				slug: item.slug,
				urgent: !urgent,
			},
			token
		);
		updateParent(item, 'urgent');
	};

	const updateNote = e => {
		e.preventDefault();
		if (newNote && newNote.length > 40) {
			newNote = newNote.slice(0, 40);
		}
		setValues({
			...values,
			note: newNote,
		});
		updateItem(
			{
				slug: item.slug,
				note: newNote,
			},
			token
		);
	};

	const getNoteForm = () => {
		let popup = document.getElementById(item.name + 'Popup');
		popup.style.display = 'block';
	};

	const closePopup = () => {
		let popup = document.getElementById(item.name + 'Popup');
		popup.style.display = 'none';
	};

	const handlePopupChange = e => {
		setNewNote(e.target.value);
	};

	if (process.browser) {
		let popup = document.getElementById(item.name + 'Popup');
		window.onclick = function (event) {
			if (event.target == popup) {
				popup.style.display = 'none';
			}
		};
	}

	const boughtItem = () => {
		removeItem(
			{
				slug: item.slug,
			},
			token
		);
		updateParent(item, 'remove');
	};

	return (
		<div className='lead pb-3 main__card'>
			<header className='main__card__title'>
				{window.innerWidth > 1210 && (
					<div className='container-fluid'>
						<div className='row placeCenter'>
							<div className='row col-md-8 justify-content-start placeCenter'>
								<div className='col-md-2'>
									<h3 className='pt-1 pb-0 mb-0 font-weight-bold placeCenter itemCard-text'>
										{name}
									</h3>
								</div>
								<div className='col-md-4'>
									<p className='pt-1 pb-0 pr-2 mb-0 font-weight-bold placeCenter'>
										Amount: {amount}
									</p>
								</div>
								<div className='col-md-6 placeCenter justify-content-center'>
									<p className='mb-0'>
										Added by {item.postedBy} {moment(item.createdAt).fromNow()}
									</p>
								</div>
							</div>
							<div className='row col-md-4 justify-content-end'>
								<div className='row'>
									<div onClick={plusAmount} style={{ zIndex: '2' }}>
										<IconButton>
											<AddIcon />
										</IconButton>
									</div>
									<div
										onClick={minusAmount}
										style={{ zIndex: '2', paddingRight: '10px' }}
									>
										<IconButton>
											<RemoveIcon />
										</IconButton>
									</div>
								</div>
								{urgent && (
									<div className='main__card__urgent'>
										<label className='pr-1'>
											<Checkbox defaultChecked onChange={toggleUrgent} />
											<span className='pl-1'>Urgent</span>
										</label>
									</div>
								)}
								{!urgent && (
									<div className='main__card__urgent'>
										<label className='pr-1'>
											<Checkbox onChange={toggleUrgent} />
											<span className='pl-1'>Urgent</span>
										</label>
									</div>
								)}
								<div className='pl-1 placeCenter' onClick={getNoteForm}>
									<IconButton>
										<CreateIcon />
									</IconButton>
								</div>
								<div className='pl-1 placeCenter' onClick={boughtItem}>
									<IconButton>
										<DeleteIcon />
									</IconButton>
								</div>
							</div>
						</div>
					</div>
				)}
				{window.innerWidth <= 1210 && (
					<div className='container-fluid'>
						<div className='row placeCenter'>
							<div className='row col-md-6 justify-content-start placeCenter'>
								<div className='col-md-6'>
									<a
										title={`Added by ${item.postedBy} ${moment(
											item.createdAt
										).fromNow()}`}
									>
										<h3 className='pt-1 pb-0 mb-0 font-weight-bold placeCenter itemCard-text'>
											{name}
										</h3>
									</a>
								</div>
								<div className='col-md-6'>
									<p className='pt-1 pb-0 pr-2 mb-0 font-weight-bold placeCenter'>
										Amount: {amount}{' '}
									</p>
								</div>
							</div>
							<div className='row col-md-6 justify-content-end'>
								<div className='row'>
									<div onClick={plusAmount} style={{ zIndex: '2' }}>
										<IconButton>
											<AddIcon />
										</IconButton>
									</div>
									<div
										onClick={minusAmount}
										style={{ zIndex: '2', paddingRight: '10px' }}
									>
										<IconButton>
											<RemoveIcon />
										</IconButton>
									</div>
								</div>
								{urgent && (
									<div className='main__card__urgent'>
										<label className='pr-1'>
											<Checkbox defaultChecked onChange={toggleUrgent} />
											<span className='pl-1'>Urgent</span>
										</label>
									</div>
								)}
								{!urgent && (
									<div className='main__card__urgent'>
										<label className='pr-1'>
											<Checkbox onChange={toggleUrgent} />
											<span className='pl-1'>Urgent</span>
										</label>
									</div>
								)}
								<div className='pl-1 placeCenter' onClick={getNoteForm}>
									<IconButton>
										<CreateIcon />
									</IconButton>
								</div>
								<div className='pl-1 placeCenter' onClick={boughtItem}>
									<IconButton>
										<DeleteIcon />
									</IconButton>
								</div>
							</div>
						</div>
					</div>
				)}
			</header>

			{note && (
				<div className='main__card__info'>
					<section>
						<div className='pt-1 pb-1 pl-2'>
							<p style={{ marginBottom: '0px' }}>Note: {note}</p>
						</div>
					</section>
				</div>
			)}

			<div id={item.name + 'Popup'} className='popup'>
				<div className='popup-content'>
					<form onSubmit={updateNote}>
						<span className='close' onClick={closePopup}>
							&times;
						</span>
						<input
							type='text'
							placeholder='Update Note'
							value={newNote}
							className='form-control'
							onChange={handlePopupChange}
						/>
						<button type='submit' className='btn btn-primary mt-3'>
							Update
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
