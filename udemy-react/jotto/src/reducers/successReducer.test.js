import successReducer from './successReducer';
import { actionTypes } from '../actions';

test('returns default initial state of false when no action', () => {
    const newState = successReducer(undefined, {});

    expect(newState).toBe(false);
});

test('returns true when is correct guess action', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS});

    expect(newState).toBe(true);
});
