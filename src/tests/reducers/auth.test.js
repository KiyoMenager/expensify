import authReducer from '../../reducers/auth';

test('should setup default filter values', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'UID'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe('UID');
});

test('should wipe uid on logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({});
});
