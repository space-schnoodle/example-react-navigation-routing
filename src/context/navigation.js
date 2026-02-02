import { createContext, useState, useEffect } from 'react'; 

const NavigationConext = createContext();

function  NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // make component to re-render
    useEffect(() => {
        // will be called whenever the user uses the back and forward buttons
        const handler = () => {
            setCurrentPath(window.location.pathname);  
        };

        // this event is fired when the active history entry changes
        // within the same document
        window.addEventListener('popstate', handler);

        // clean the envent listener, in case the component is removed
        return () => {
            window.removeEventListener('popstate', handler);
        }

    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return <NavigationConext.Provider value={{ currentPath, navigate }}>
        {children}
    </NavigationConext.Provider>
};

export { NavigationProvider };
export default NavigationConext;