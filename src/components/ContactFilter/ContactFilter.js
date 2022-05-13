import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import TextField from '@mui/material/TextField';

export default function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
    return (
        <label>Find contacts by name
        <TextField margin="normal"
              fullWidth  variant="outlined" type="text" value={value} onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}/> 
    </label>
    )  
};

Filter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func
 };