import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept!</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an importmant agreement for you to accept
            </p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed metus eget magna sollicitudin ullamcorper eu at nisl. Curabitur consectetur nunc elit. Phasellus feugiat urna id aliquam sodales. Sed odio purus, consectetur et nisl vitae, egestas commodo nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eget vehicula elit. Nulla quis mauris rhoncus nisi euismod posuere. Nullam a libero ut nisl cursus egestas. Maecenas ut urna ipsum. Vivamus scelerisque consequat efficitur. Suspendisse fermentum, magna vel semper tincidunt, libero nunc lobortis turpis, eget bibendum felis nisi eget nibh. Etiam sapien turpis, blandit ut arcu id, dictum convallis ipsum. Vestibulum eu varius metus. Morbi venenatis vehicula massa, ac congue turpis volutpat eget. Donec ornare nunc vitae erat auctor pellentesque. Praesent in eros commodo, placerat massa quis, venenatis massa.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed metus eget magna sollicitudin ullamcorper eu at nisl. Curabitur consectetur nunc elit. Phasellus feugiat urna id aliquam sodales. Sed odio purus, consectetur et nisl vitae, egestas commodo nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eget vehicula elit. Nulla quis mauris rhoncus nisi euismod posuere. Nullam a libero ut nisl cursus egestas. Maecenas ut urna ipsum. Vivamus scelerisque consequat efficitur. Suspendisse fermentum, magna vel semper tincidunt, libero nunc lobortis turpis, eget bibendum felis nisi eget nibh. Etiam sapien turpis, blandit ut arcu id, dictum convallis ipsum. Vestibulum eu varius metus. Morbi venenatis vehicula massa, ac congue turpis volutpat eget. Donec ornare nunc vitae erat auctor pellentesque. Praesent in eros commodo, placerat massa quis, venenatis massa.
            </p>
        </div>
    );
}

export default ModalPage;