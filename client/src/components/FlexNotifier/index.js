import { useState } from 'react';
import { withSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification, selectNotifications } from '../../ducks/notifier';

const FlexNotifier = ({ enqueueSnackbar }) => {
  const dispatch = useDispatch();
  const [displayed, setDisplayed] = useState([]);
  const notifications = useSelector(selectNotifications);

  notifications.forEach((notification) => {
    setTimeout(() => {
      if (displayed.filter((key) => key === notification.key).length > 0) {
        return;
      }

      enqueueSnackbar(notification.message, {
        variant: notification.type,
      });
      setDisplayed([...displayed, notification.key]);
      dispatch(removeNotification(notification.key));
    }, 300);
  });

  return null;
};

export default withSnackbar(FlexNotifier);
