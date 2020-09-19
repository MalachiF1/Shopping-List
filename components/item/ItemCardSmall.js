import moment from 'moment';
import { updateItem, removeItem } from '../../actions/item';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import LowPriorityIcon from '@material-ui/icons/LowPriority';

import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from 'rc-checkbox';
import { IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getCookie } from '../../actions/auth';

const ItemCardSmall = ({ item, updateParent }) => {
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

	const updateNote = () => {
		let newNote = prompt('Update Note:', note);
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
				<div className='container-fluid'>
					<div className='row placeCenter'>
						<div className='row col justify-content-end'>
							<div className='pl-1 placeCenter' onClick={boughtItem}>
								<IconButton>
									<DeleteIcon />
								</IconButton>
							</div>
							<div className='pl-1 placeCenter' onClick={updateNote}>
								<IconButton>
									<CreateIcon />
								</IconButton>
							</div>
							{urgent && (
								<div className='main__card__urgent'>
									<a title='Urgent'>
										<label className='pr-1'>
											<Checkbox defaultChecked onChange={toggleUrgent} />
											<span className='pl-1'>
												<PriorityHighIcon
													style={{ color: '#3dbcf6', fontSize: '15px' }}
												/>
											</span>
										</label>
									</a>
								</div>
							)}
							{!urgent && (
								<div className='main__card__urgent'>
									<a title='Not Urgent'>
										<label className='pr-1'>
											<Checkbox onChange={toggleUrgent} />
											<span className='pl-1'>
												<LowPriorityIcon
													style={{ color: 'white', fontSize: '15px' }}
												/>
											</span>
										</label>
									</a>
								</div>
							)}
							<div className='pl-2'>
								<div onClick={plusAmount} style={{ zIndex: '2' }}>
									<IconButton
										style={{ width: '20px', height: '20px', zIndex: '1' }}
									>
										<ArrowUpwardIcon className='itemCard-arrow' />
									</IconButton>
								</div>
								<div onClick={minusAmount} style={{ zIndex: '2' }}>
									<IconButton
										style={{ width: '20px', height: '20px', zIndex: '1' }}
									>
										<ArrowDownwardIcon className='itemCard-arrow' />
									</IconButton>
								</div>
							</div>
						</div>
						<div className='placeCenter row col-6 justify-content-start pl-0 pr-0'>
							<div className='col justify-content-start placeCenter'>
								<a>
									<h3
										style={{ float: 'left' }}
										className='pt-1 pb-0 pl-1 pr-2 mb-0 font-weight-bold placeCenter itemCard-text'
									>
										{amount}{' '}
									</h3>
								</a>
								<a
									title={`Added by ${item.postedBy} ${moment(
										item.createdAt
									).fromNow()}`}
								>
									<h3
										style={{ float: 'left' }}
										className='pt-1 pb-0  pl-2  mb-0 font-weight-bold placeCenter itemCard-text'
									>
										{name}
									</h3>
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>

			{note && (
				<div className='main__card__info'>
					<section>
						<div className='pt-1 pl-2 pb-1'>
							<p style={{ marginBottom: '0px' }}>Note: {note}</p>
						</div>
					</section>
				</div>
			)}
		</div>
	);
};

export default ItemCardSmall;
