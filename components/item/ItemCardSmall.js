import moment from 'moment';
import { updateItem, removeItem } from '../../actions/item';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import UpdateItem from './UpdateItem';
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
			amount: parseFloat(parseFloat((amount + 1).toFixed(3)).toString()),
		});
		updateItem(
			{
				slug: item.slug,
				amount: parseFloat(parseFloat((amount + 1).toFixed(3)).toString()),
			},
			token
		);
	};

	const minusAmount = () => {
		if (amount <= 1) {
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
				amount: parseFloat(parseFloat((amount - 1).toFixed(3)).toString()),
			});
			updateItem(
				{
					slug: item.slug,
					amount: parseFloat(parseFloat((amount - 1).toFixed(3)).toString()),
				},
				token
			);
		}
	};

	const getPopupForm = () => {
		let popup = document.getElementById(item.name + 'Popup');
		popup.style.display = 'block';
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

	const updateItemCard = newValues => {
		setValues(newValues);
	};

	return (
		<div className='lead pb-3 main__card'>
			<header className='main__card__title' style={{ color: urgent ? '#3dbcf6' : '' }}>
				<div className='container-fluid'>
					<div className='row justify-content-center'>
						<div className='placeCenter row col-8 justify-content-start pl-0 pr-0 ml-0 mr-0'>
							<div className='col justify-content-start placeCenter p-0'>
								<div className='pl-2'>
									<div onClick={plusAmount} style={{ zIndex: '2' }}>
										<IconButton style={{ width: '20px', height: '20px', zIndex: '1' }}>
											<ArrowUpwardIcon className='itemCard-arrow' />
										</IconButton>
									</div>
									<div onClick={minusAmount} style={{ zIndex: '2' }}>
										<IconButton style={{ width: '20px', height: '20px', zIndex: '1' }}>
											<ArrowDownwardIcon className='itemCard-arrow' />
										</IconButton>
									</div>
								</div>
								<h3
									style={{ display: 'grid', placeContent: 'center' }}
									className='pt-1 pb-0 pl-1 pr-2 mb-0 font-weight-bold placeCenter itemCard-text'
								>
									{amount}{' '}
								</h3>
								<a
									title={`Added by ${item.postedBy} ${moment(item.createdAt).fromNow()}`}
									style={{ display: 'grid', placeContent: 'center' }}
								>
									<h3
										style={{ float: 'left' }}
										className='pt-1 pb-0  pl-2  mb-0 font-weight-bold itemCard-text'
									>
										{name}
									</h3>
								</a>
							</div>
						</div>
						<div className='row col-4 justify-content-end ml-0 mr-0 pr-0 pl-0'>
							<div className='col-6 placeCenter p-0' onClick={getPopupForm}>
								<IconButton>
									<CreateIcon />
								</IconButton>
							</div>
							<div className='col-6 placeCenter p-0' onClick={boughtItem}>
								<IconButton>
									<DeleteIcon />
								</IconButton>
							</div>
						</div>
					</div>
				</div>
			</header>

			{note && (
				<div className='main__card__info' style={{ color: urgent ? '#3dbcf6' : '' }}>
					<section>
						<div className='pt-1 pl-2 pb-1'>
							<p style={{ marginBottom: '0px' }}>Note: {note}</p>
						</div>
					</section>
				</div>
			)}

			<div id={item.name + 'Popup'} className='popup'>
				<UpdateItem item={item} updateParent={updateItemCard} />
			</div>
		</div>
	);
};

export default ItemCardSmall;
