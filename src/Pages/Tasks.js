// 
import React, { useState, useEffect } from "react";
import { Table, Input ,Button,Modal, Form, Input as AntInput} from "antd";

function Tasks() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [editdata,setEditdata]=useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id"
        },
        {
          title: "Title",
          dataIndex: "title",
          key: "title"
      },
        {
            title: "Category",
            dataIndex: "category",
            key: "category"
        },
        {
          title: "Rating",
          dataIndex: "rating",
          key: "rating",
          render: (rating) => `${rating.rate} stars (${rating.count} reviews)`
      },
        {
            title: "Price",
            dataIndex: "price",
            key: "price"
        },
        {
          title: "Actions",
          key: "actions",
          render: (text, record) => (
              <div className="flex gap-2">
                  <Button type="primary" className="bg-blue-500 hover:bg-blue-200 text-white" onClick={() => handleEdit(record)} >Edit</Button>
                  <Button type="danger" className="bg-red-500 hover:bg-red-300 text-white" onClick={() => handleDelete(record.id)}>Delete</Button>
              </div>
          )
      }

    ];
    const handleDelete = (productId) => {
      fetch(`https://fakestoreapi.com/products/${productId}`, {
          method: 'DELETE'
      })
      .then(() => {
          setData(data.filter(product => product.id !== productId));
      })
      .catch(error => console.error('Error deleting product:', error));
  }

  const handleEdit = (record) => {
      setModalVisible(true);
  }

  const handleEditChange = (items) => {
    const name = items.target.name;
    const value = items.target.value;
    setEditdata(values => ({...values, [name]: value}));
}

    const handleChange = (value) => {
        setSearch(value);
    }

    const filtered = data.filter((prod) =>
        prod.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="mt-[50px] mx-auto p-4 sm:w-full md:w-full lg:w-3/2 ">
      <div className="mb-4">
          <Input placeholder="Search For Products" onChange={(e) => handleChange(e.target.value)} className="w-full sm:w-64 rounded rounded-lg " />
      </div>
      <div className="overflow-x-auto">
          <Table columns={columns} dataSource={filtered} scroll={{ x: 100 }} className="shadow-lg rounded-lg" />
      </div>
      <Modal
                title="Edit Product Details"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <Form>
                    <Form.Item label="Product ID">
                        <AntInput name="id" onChange={(e) => handleEditChange(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Product Name">
                        <AntInput name="title" onChange={(e) => handleEditChange(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Product Description">
                        <AntInput name="title" onChange={(e) => handleEditChange(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Product Name">
                        <AntInput name="title" onChange={(e) => handleEditChange(e.target.value)} />
                    </Form.Item>
                </Form>
            </Modal>
  </div>
    );
}

export default Tasks;
