import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const ProfilePage = () => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    store.reducerManager.add('profile', profileReducer);
    dispatch({ type: '' });
    return () => {
      store.reducerManager.remove('profile');
      dispatch({ type: '' });
    };
  }, []);

  return <div>ProfilePage</div>;
};

export default ProfilePage;
