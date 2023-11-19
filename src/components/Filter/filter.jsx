import css from './filter.module.css'

export const Filter = ({ value, onChangeFilter }) => {
    return (
        <label className={css.filter}>

            Find contacts by name

            <input className={css.input} type='text'
                name='filter'
                placeholder='Enter contact name'
                value={value}
                onChange={onChangeFilter} />

        </label>
    );
};