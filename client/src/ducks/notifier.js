import { createSelector } from 'reselect';

const ADD_NOTIFICATION = '@HRANTBLOG/notifier/ADD';
const REMOVE_NOTIFICATION = '@HRANTBLOG/notifier/REMOVE';

const initialState = {
  nextNotification: -1,
  notifications: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      const key = state.nextNotification + 1;

      return {
        ...state,
        nextNotification: key,
        notifications: [
          { ...action.notification, key },
          ...state.notifications,
        ],
      };
    }
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.key !== action.key,
        ),
      };
    default:
      return state;
  }
};

export const addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  notification,
});

export const removeNotification = (key) => ({
  type: REMOVE_NOTIFICATION,
  key,
});

export const selectState = (state) => state.notifier;

export const selectNotifications = createSelector(
  selectState,
  (notifierState) => notifierState.notifications,
);
