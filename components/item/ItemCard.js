import moment from 'moment';
import { updateItem, removeItem } from '../../actions/item';
import CreateIcon from '@material-ui/icons/Create';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import UpdateItem from './UpdateItem';
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
				{window.innerWidth > 1210 && (
					<div className='container-fluid'>
						<div className='row placeCenter'>
							<div className='row col-md-8 justify-content-start placeCenter'>
								<div className='col-md-2'>
									<div className='' style={{ display: 'grid', placeContent: 'center' }}>
										<h3
											className='pt-1 pb-0 mb-0 font-weight-bold itemCard-text'
											style={{ display: 'grid', placeContent: 'center' }}
										>
											{name}
										</h3>
									</div>
								</div>
								<div className='col-md-4' style={{ display: 'grid', placeContent: 'center' }}>
									<p className='pt-1 pb-0 pr-2 mb-0 font-weight-bold placeCenter'>Amount: {amount}</p>
								</div>
								<div
									className='col-md-6 placeCenter justify-content-center'
									style={{ display: 'grid', placeContent: 'center' }}
								>
									<p className='mb-0'>
										Added by {item.postedBy} {moment(item.createdAt).fromNow()}
									</p>
								</div>
							</div>
							<div className='row col-md-4 justify-content-end'>
								<div className='row'>
									<div onClick={plusAmount} className='placeCenter' style={{ zIndex: '2' }}>
										<IconButton>
											<AddIcon />
										</IconButton>
									</div>
									<div
										onClick={minusAmount}
										style={{ zIndex: '2', paddingRight: '10px' }}
										className='placeCenter'
									>
										<IconButton>
											<RemoveIcon />
										</IconButton>
									</div>
								</div>
								<div className='pl-1 placeCenter' onClick={getPopupForm}>
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
									<a title={`Added by ${item.postedBy} ${moment(item.createdAt).fromNow()}`}>
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
									<div onClick={minusAmount} style={{ zIndex: '2', paddingRight: '10px' }}>
										<IconButton>
											<RemoveIcon />
										</IconButton>
									</div>
								</div>
								<div className='pl-1 placeCenter' onClick={getPopupForm}>
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
				<div className='main__card__info' style={{ color: urgent ? '#3dbcf6' : '' }}>
					<section>
						<div className='pt-1 pb-1 pl-2'>
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

export default ItemCard;
