import { useContext } from 'react';
import NavigationConext from '../context/navigation';

// just to save a tiny bit of code
function useNavigation() {
    return useContext(NavigationConext);
}

export default useNavigation;