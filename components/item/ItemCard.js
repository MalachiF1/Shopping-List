import moment from 'moment';
import { updateItem, removeItem } from '../../actions/item';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CreateIcon from '@material-ui/icons/Create';

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
        loading: false
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
            amount: amount + 1
        });
        updateItem({
            slug: item.slug,
            amount: amount + 1
        }, token);
    };

    const minusAmount = () => {
        if (amount === 1) {
            removeItem({
                slug: item.slug
            }, token);
            updateParent(item, 'remove');
        } else {
            setValues({
                ...values,
                amount: amount - 1
            });
            updateItem({
                slug: item.slug,
                amount: amount - 1
            }, token);
        } 
    };

    const toggleUrgent = () => { 
        setValues({
            ...values,
            urgent: !urgent
        });
        updateItem({
            slug: item.slug,
            urgent: !urgent
         }, token);
        updateParent(item, 'urgent');
    };

    const updateNote = () => { 
        let newNote = prompt('Update Note:', note);
        if (newNote && newNote.length > 40) {
            newNote = newNote.slice(0, 40)
        }
        setValues({
            ...values,
            note: newNote
        });
        updateItem({
            slug: item.slug,
            note: newNote
        }, token);
    };

    const boughtItem = () => {
        removeItem({
            slug: item.slug
        }, token);
        updateParent(item, 'remove');
    };

    
    return (
        <div className='lead pb-3 main__card'>
            <header className='main__card__title'>
                <div className='row' style={{display: 'flex', verticalAlign: 'center'}}>
                    <div style={{display: 'flex', verticalAlign: 'center'}} className='row col-md-8'>
                        <div className='col-md-4' style={{paddingLeft: '1.5vw'}}>
                            <h3 className='pt-1 pb-2 mb-0 font-weight-bold'>{name}</h3>
                        </div>
                        <div className='col-md-4' style={{display: 'grid', placeItems: 'center', paddingRight: '10vw'}}>
                            <p className='mb-0 font-weight-bold'>Amount: {amount} </p>
                        </div>
                        <div className='pt-1 col-md-4'>
                            <p className='pt-2 mb-0'>
                                Added by {item.postedBy} {moment(item.createdAt).fromNow()}
                            </p>
                        </div>
                    </div>
                    <div className='row col-md-4' style={{paddingLeft: '9vw'}}> 
                       <div onClick={plusAmount}>
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                       </div>
                       <div onClick={minusAmount}>
                            <IconButton >
                                <RemoveIcon />
                            </IconButton>
                       </div>
                       {urgent && (
                            <div style={{display: "flex", alignItems: 'center', paddingTop: '0.5vh', paddingLeft: '1vw'}}>
                                <label>
                                    <Checkbox defaultChecked onChange={toggleUrgent} />
                                    <span className='pl-1'>Urgent</span>
                                </label>
                            </div>
                        )}
                        {!urgent && (
                            <div style={{display: "flex", alignItems: 'center', paddingTop: '0.5vh', paddingLeft: '1vw'}}>
                                <label>
                                    <Checkbox onChange={toggleUrgent} />
                                    <span className='pl-1'>Urgent</span>
                                </label>
                            </div>
                        )}
                        <div>
                            <div className='pl-3' onClick={updateNote}>
                                <IconButton>
                                    <CreateIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className='pl-3' onClick={boughtItem}>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </header>
            
            {note && (<div className='main__card__info pl-1'>
                <section>
                    <div className='row pl-3'>
                        <div style={{display: 'grid', placeContent: 'center'}}>
                            <div className='pl-3 pt-1 pb-1'>
                                <p style={{marginBottom: '0px'}}>Note: {note}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>)}
      </div>
    );
};

export default ItemCard;