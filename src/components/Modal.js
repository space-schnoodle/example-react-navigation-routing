import { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ onClose, children, actionBar }) {
    // to show the gray area in the whole body / screen 
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    // render the modal in another part of the html where position is not set
    return ReactDOM.createPortal(
        <div>
            <div 
                onClick={onClose} 
                className="fixed inset-0 bg-gray-300 opacity-80"
            >
            </div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
                
            </div>
        </div>,
        document.querySelector('.modal-container'),
    );
}

export default Modal;