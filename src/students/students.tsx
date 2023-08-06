import { Button, Modal, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import ModalComponent from "../modal";

interface DataStudent {
    key: number;
    name: string;
    age: number;
    address: string;

}
const Student = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const dataStudent: DataStudent[] = [
        {
            key: 1,
            name: 'Mike',
            age: 32,
            address: 'Hà Nội',
        },
        {
            key: 2,
            name: 'John',
            age: 42,
            address: 'Hưng yên',
        },
    ];

    const columns: ColumnsType<DataStudent> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '30%',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: '30%',
        },
        {
            title: '',
            dataIndex: '',
            width: '10%',
            render: () => {
                return <div>
                    <div style={{ display: "flex" }}>
                        <Button onClick={openModal}>ADD</Button>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </div>
                </div>
            }
        }]

    const [datacolums, setDatacolum] = useState(dataStudent);

    const addStudent = () => {
        setDatacolum([...datacolums, {
            key: datacolums.length + 1,
            name: 'nam',
            age: 30,
            address: 'Hn'
        }])
    }

    return (
        <div>
            <Table dataSource={datacolums} columns={columns} pagination={false} />
            <ModalComponent isOpen={modalIsOpen} onClose={closeModal} />
        </div>
    )
}
export default Student;