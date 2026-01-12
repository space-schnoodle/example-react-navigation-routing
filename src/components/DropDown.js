import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divElement = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divElement.current) {
                return;
            }

            //if this is false the user clicked outside the dropdown
            if (!divElement.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // use the capture phase, third parameter must be true
        document.addEventListener('click', handler, true);

        // clean up function
        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        // close dropdown
        setIsOpen(false);
        // what option did the user click
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref={divElement} className='w-48 relative'>
            <Panel 
                className='flex justify-between items-center cursor-pointer'
                onClick={handleClick}
            >
                {value?.label || 'Select...'}
                <GoChevronDown className='text-lg'/>
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    );
}

export default DropDown;