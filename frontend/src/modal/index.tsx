import { Input, Modal } from "antd";
import React, { useState } from "react";

interface IpropsModal {
    onClose?: () => void;
    isOpen?: boolean;


}

const ModalComponent = ({ isOpen, onClose }: IpropsModal) => {
    const [inputValueName, setInputValueName] = useState('');
    const [inputValueAge, setInputValueAge] = useState('');
    const [inputValueAddress, setInputAddress] = useState('');

    const handleValueInputName = (e: { target: { value: any; }; }) => {
        setInputValueName(e.target.value);
    };
    const handleValueInputAge = (e: { target: { value: any; }; }) => {
        setInputValueAge(e.target.value);
    };
    const handleValueInputAddress = (e: { target: { value: any; }; }) => {
        setInputAddress(e.target.value);
    };
    return (
        <div>

            <div className="modal-content">

                <Modal
                    title="Modal"
                    open={isOpen}
                    okText="ADD"
                    cancelText="Cancel"
                    onCancel={onClose}
                >
                    <p>Confirm?</p>
                    <div>
                        <p>Name</p>
                        <Input value={inputValueName} onChange={handleValueInputName} />
                    </div>
                    <div>
                        <p>Age</p>
                        <Input value={inputValueAge} onChange={handleValueInputAge} />
                    </div>
                    <div>
                        <p>Address</p>
                        <Input value={inputValueAddress} onChange={handleValueInputAddress} />
                    </div>

                </Modal>
            </div>
        </div>
    )
}
export default ModalComponent;