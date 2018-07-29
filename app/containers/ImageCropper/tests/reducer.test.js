import { fromJS } from 'immutable';
import imageCropperReducer from '../reducer';

describe('imageCropperReducer', () => {
  it('returns the initial state', () => {
    expect(imageCropperReducer(undefined, {})).toEqual(fromJS({}));
  });
});
