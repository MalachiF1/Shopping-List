import { getItems } from '../actions/item';
import ItemCardSmall from './item/ItemCardSmall';
import { getCookie } from '../actions/auth';
import ItemCard from './item/ItemCard';
import { useState, useEffect } from 'react';
import Search from './item/Search';
import Checkbox from 'rc-checkbox';
import eventHub from '../helpers/eventHub';
import AddItem from './item/AddItem';

const Main = () => {
	const [token, setToken] = useState('');
	const [items, setItems] = useState([]);
	const [allItems, setAllItems] = useState([]);
	const [windowWidth, setWindowWidth] = useState(0);

	let firstTime = true;
	useEffect(() => {
		initItems();
		if (firstTime) {
			eventHub.on('itemAdded', () => {
				initItems();
			});
			firstTime = false;
		}
		setWindowWidth(window.innerWidth);
	}, []);

	const initItems = () => {
		const tempToken = getCookie('token');
		getItems(tempToken).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				setItems(data);
				setAllItems(data);
			}
		});
		setToken(tempToken);
	};

	const getWindowSize = () => {
		setWindowWidth(window.innerWidth);
	};

	if (process.browser) {
		window.addEventListener('resize', getWindowSize);
	}

	const showItems = () => {
		if (windowWidth > 890) {
			return items.map(item => {
				return (
					<article key={item._id}>
						<ItemCard item={item} updateParent={updateItemsState} />
					</article>
				);
			});
		} else {
			return items.map(item => {
				return (
					<article key={item._id}>
						<ItemCardSmall item={item} updateParent={updateItemsState} />
					</article>
				);
			});
		}
	};

	const handleUrgentToggle = () => {
		if (document.getElementById('sort-urgent').checked) {
			setItems(
				items.filter(item => {
					if (item.urgent) {
						return true;
					} else {
						return false;
					}
				})
			);
		} else {
			setItems(allItems);
		}
	};

	const toggleSearchSort = (returnedItems, status) => {
		if (status) {
			setItems(returnedItems);
		} else {
			setItems(allItems);
		}
	};

	const updateItemsState = (item, update) => {
		if (update === 'remove') {
			setItems(
				items.filter(current => {
					if (current.name === item.name) {
						return false;
					} else {
						return true;
					}
				})
			);
			setAllItems(
				allItems.filter(current => {
					if (current.name === item.name) {
						return false;
					} else {
						return true;
					}
				})
			);
		} else if (update === 'urgent') {
			const i = items.indexOf(item);
			const j = allItems.indexOf(item);
			items[i].urgent = !items[i].urgent;
			handleUrgentToggle();
		}
	};

	const showDropDown = () => {
		console.log('hello');
		const dropdown = document.getElementById('addItemDropdown');
		if (dropdown.style.display === 'none') {
			dropdown.style.display = 'block';
		} else {
			dropdown.style.display = 'none';
		}
	};

	return (
		<div className='main'>
			<div className='main__title'>
				<div>
					<div className='text-center'>
						<h2>Shopping List</h2>
					</div>
					<div className='row main__filters'>
						<div>
							<Search updateParent={toggleSearchSort} />
						</div>
						<div className='ml-3 pt-2'>
							<label
								style={{
									display: 'flex',
									placeContent: 'center',
									placeItems: 'center',
								}}
							>
								<Checkbox id='sort-urgent' onChange={handleUrgentToggle} />
								<span className='pl-1 pb-1'>Sort Urgent</span>
							</label>
						</div>
					</div>
					<hr className='mb-0 pb-0' />
					<div className='main__title__dropdown mt-3 pb-0' onClick={showDropDown}>
						<a>Add Item</a>
					</div>
					<div
						id='addItemDropdown'
						className='main__title__dropdown__inner'
						style={{ display: 'none' }}
					>
						<hr className='mt-0 pt-0' />
						<AddItem />
					</div>
				</div>
			</div>
			<hr className='ml-0 mr-0 mt-3' />
			<div className='main__body'>{showItems()}</div>
		</div>
	);
};

export default Main;
