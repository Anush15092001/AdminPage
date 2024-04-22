// 
import React, { useState, useEffect } from "react";
import { Table, Input ,Button,Modal, Form, Input as AntInput, AutoComplete} from "antd";

function Tasks(toogle) {
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

   const handleAdd =()=>{
      setaddModalVisible(true);
   }
   const addform = {
    id:`${editdata.id}`,
    title:`${editdata.title}`,
    description:`${editdata.description}`,
    category:`${editdata.category}`,
    image:`${editdata.image}`,
    rating:{
        rate:`${editdata.rate}`,
        count:`${editdata.count}`
    }
}
console.log(addform)

   const handleSubmit=()=>{
    setaddModalVisible(false)
    setData([...data, addform]);   
    console.log(data)
   }

    return (
        
      <div className={`${toogle ? "md:left-0" : "w-full"} mt-[50px] xxs:mt-[80px] fixed mx-auto p-4 sm:w-full md:w-screen lg:w-3/2 `}>
      <div className="flex justify-around mb-4 gap-2">
          <Input placeholder="Search For Products" onChange={(e) => handleChange(e.target.value)} className="w-full md:w-96 sm:w-64 rounded rounded-lg " />
          <Button type="primary" className="w-full md:w-84 sm:w-64  h-[50px] font-bold text-lg" onClick={handleAdd}>Add Products</Button>
      </div>
      <div className="overflow-x-auto">
          <Table columns={columns} dataSource={filtered} scroll={{ x: 100,y:380}} className="shadow-lg rounded-lg" />
      </div>
      <Modal
                title="Edit Product Details"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <Form  className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 max-w-xl md:max-w-2xl w-full" layout="vertical">
                    <Form.Item label="Product ID">            
                    <AntInput value={edit.id} onChange={(e) => setEditdata({...edit, id: e.target.value})} />
                    </Form.Item>
                    <Form.Item label="Product Name">
                        <AntInput value={edit.title} onChange={(e) => setEditdata({...edit, title: e.target.value})} />
                    </Form.Item>
                    <Form.Item label="Description">
                        <AntInput  value={edit.description} onChange={(e) => setEditdata({...edit, description: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label="Category">
                        <AntInput  value={edit.category} onChange={(e) => setEditdata({...edit, category: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label="Price">
                        <AntInput  value={edit.price} onChange={(e) => setEditdata({...edit, price: e.target.value})} />
                    </Form.Item>
                    <Form.Item label="Image Url">
                        <AntInput value={edit.image} onChange={(e) => setEditdata({...edit, image: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label="Ratings" />
                    <Form.Item label="Stars">
                        <AntInput value={edit.rating} onChange={(e) => setEditdata({...edit, rate: e.target.value})} />
                    </Form.Item>
                    <Form.Item label="No of People Reviewd">
                        <AntInput   value={edit.rating} onChange={(e) => setEditdata({...edit, count: e.target.value})} />
                    </Form.Item>
                    <Button type="primary" visible={modalVisible} onClick={() =>handleSubmit} >Submit</Button>
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
                        <AntInput name="title" value={editdata.title} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Description">
                        <AntInput name="description" value={editdata.description} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Category">
                        <AntInput name="category" value={editdata.category} onChange={handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Price">
                        <AntInput name="price"  value={editdata.price} onChange={ handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Image Url">
                        <AntInput name="image"  value={editdata.image} onChange={ handleEditChange} />
                    </Form.Item>
                    <Form.Item label="Ratings" />
                    <Form.Item label="Stars">
                        <AntInput name="rate"  value={editdata.rate} onChange={ handleEditChange} />
                    </Form.Item>
                    <Form.Item label="No of People Reviewd">
                        <AntInput name="count"  value={editdata.count} onChange={ handleEditChange} />
                    </Form.Item>
                    <Button type="primary" visible={modaladdVisible} onClick={handleSubmit} >Submit</Button>
                </Form>
            </Modal>
  </div>
    );
}

export default Tasks;
