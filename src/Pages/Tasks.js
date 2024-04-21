// 
import React, { useState, useEffect } from "react";
import { Table, Input ,Button,Modal, Form, Input as AntInput} from "antd";

function Tasks() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [modaladdVisible, setaddModalVisible] = useState(false);
    const [editdata,setEditdata]=useState([])
    const [edit,setEdit]=useState([])

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
      setEdit(record)
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
   console.log(edit)
   console.log(editdata)

   const handleAdd =()=>{
      setaddModalVisible(true);
   }
    return (
      <div className="mt-[50px] mx-auto p-4 sm:w-full md:w-full lg:w-3/2 ">
      <div className="flex justify-around mb-4">
          <Input placeholder="Search For Products" onChange={(e) => handleChange(e.target.value)} className="w-full sm:w-64 rounded rounded-lg " />
          <Button type="primary" className="h-[50px] font-bold text-lg" onClick={handleAdd}>Add Products</Button>
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
                <Form  className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 max-w-xl md:max-w-2xl w-full" layout="vertical">
                    <Form.Item label="Product ID">            
                    <AntInput name="id" value={edit.id} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Product Name">
                        <AntInput name="title" value={(edit.title)} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Description">
                        <AntInput name="desc" value={edit.description} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Category">
                        <AntInput name="category" value={edit.category} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Price">
                        <AntInput name="price"  value={edit.price} onChange={ handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Image Url">
                        <AntInput name="img"  value={edit.image} onChange={ handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Ratings" />
                    <Form.Item label="Stars">
                        <AntInput name="price"  value={edit.rating} onChange={ handleEditChange} />
                    </Form.Item>
                    <Form.Item label="No of People Reviewd">
                        <AntInput name="price"  value={edit.rating} onChange={ handleEditChange} />
                    </Form.Item>
                    <Button type="primary" visible={modalVisible} onClick={() => setModalVisible(false)} >Submit</Button>
                </Form>
            </Modal>
            <Modal
                title="Add New Product Details"
                visible={modaladdVisible}
                onCancel={() => setaddModalVisible(false)}
                footer={null}
            >
                <Form  className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 max-w-xl md:max-w-2xl w-full" layout="vertical">
                    <Form.Item label="Product ID">            
                    <AntInput name="id" value={editdata.id} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Product Name">
                        <AntInput name="title" value={(editdata.title)} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Description">
                        <AntInput name="desc" value={editdata.desc} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Category">
                        <AntInput name="category" value={editdata.category} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Price">
                        <AntInput name="price"  value={editdata.price} onChange={ handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Image Url">
                        <AntInput name="img"  value={editdata.image} onChange={ handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Ratings" />
                    <Form.Item label="Stars">
                        <AntInput name="rate"  value={editdata.rating} onChange={ handleEditChange} />
                    </Form.Item>
                    <Form.Item label="No of People Reviewd">
                        <AntInput name="count"  value={editdata.rating} onChange={ handleEditChange} />
                    </Form.Item>
                    <Button type="primary" visible={modaladdVisible} onClick={() => setaddModalVisible(false)} >Submit</Button>
                </Form>
            </Modal>
  </div>
    );
}

export default Tasks;
