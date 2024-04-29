// 
import React, { useState, useEffect } from "react";
import { Table, Input ,Button,Modal, Form, Input as AntInput} from "antd";

function Tasks({toogle}) {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [modaladdVisible, setaddModalVisible] = useState(false);
    const [editdata,setEditdata]=useState([])
    const [edit, setEdit] = useState({
        id: "",
        title: "",
        description: "",
        category: "",
        price: "",
        image: "",
        rating: { rate: "", count: "" }
    });

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);


    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width:50
        },
        {
          title: "Title",
          dataIndex: "title",
          key: "title",
          render: (text,record) => <a href={`/products/${record.id}`} >{text}</a>,
          width:150
      },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            width:100
        },
        {
          title: "Rating",
          dataIndex: "rating",
          key: "rating",
          render: (rating) => `${rating.rate} stars (${rating.count} reviews)`,
          width:100
          
      },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            width:100
            
        },
        {
          title: "Actions",
          key: "actions",
          render: (text, record) => (
              <div className="flex gap-2">
                  <Button type="primary" className="bg-blue-500 hover:bg-blue-200 text-white" onClick={() => handleEdit(record)} >Edit</Button>
                  <Button type="danger" className="bg-red-500 hover:bg-red-300 text-white" onClick={() => handleDelete(record.id)}>Delete</Button>
              </div>
          ),
          width:100,
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
    setEdit(record);
}


const handleAddChange = (e) => {
    const { name, value } = e.target;
    setEditdata(values => ({...values, [name]: value}));
};
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
    price:`${editdata.price}`,
    rating:{
        rate:`${editdata.rate}`,
        count:`${editdata.count}`
    }
}
console.log(addform)
const handleEditSubmit = () => {
    const index = data.findIndex(product => product.id === edit.id);
    if (index !== -1) {
        fetch(`https://fakestoreapi.com/products/${edit.id}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: edit.title,
                    price: edit.price,
                    description: edit.description,
                    image: edit.image,
                    category: edit.category,
                    rating:{
                        rate:edit.rating.rate,
                        count:edit.rating.count
                    }
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json));
    }
    setModalVisible(false);
}

const handleSubmit = () => {
    setaddModalVisible(false);
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    id:addform.id,
                    title: addform.title,
                    price: addform.price,
                    description: addform.description,
                    image: addform.image,
                    category: addform.category,
                    rating:{
                        rate:addform.rating.rate,
                        count:addform.rating.count
                    }
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    console.log(data);
};
    
    return (
      <div className={`${toogle ? "left-0" : "w-full"} grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 xxs:grid-cols-1 fixed md:mt-[50px] xxs:mt-[50px] mx-auto p-4 sm:w-full md:w-screen lg:w-3/2 `}>
      <div className="flex justify-around mb-4 gap-2">
          <Input placeholder="Search For Products" onChange={(e) => handleChange(e.target.value)} className="w-full md:w-96 sm:w-64 rounded rounded-lg " />
          <Button type="primary" className="w-full md:w-84 sm:w-64  h-[50px] font-bold text-lg" onClick={handleAdd}>Add Products</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 xxs:grid-cols-1 overflow-x-auto">
          <Table columns={columns} dataSource={filtered} mobileBreakPoint={750} scroll={{ x: 100,y:380}} className="shadow-lg rounded-lg" />
      </div>
      <Modal
                title="Edit Product Details"
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <Form  className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 max-w-xl md:max-w-2xl w-full" layout="vertical">
                    <Form.Item label="Product ID">            
                       <AntInput value={edit.id} readOnly onChange={(e) => setEdit({...edit, id: e.target.value})} />
                    </Form.Item>
                    <Form.Item label="Product Name">
                        <AntInput value={edit.title} onChange={(e) => setEdit({...edit, title: e.target.value})} required />
                    </Form.Item>
                    <Form.Item label="Description">
                        <AntInput.TextArea  value={edit.description} onChange={(e) => setEdit({...edit, description: e.target.value})} required/>
                    </Form.Item>
                    <Form.Item label="Category">
                        <AntInput  value={edit.category} onChange={(e) => setEdit({...edit, category: e.target.value})} required/>
                    </Form.Item>
                    <Form.Item label="Price">
                        <AntInput  value={edit.price} onChange={(e) => setEdit({...edit, price: e.target.value})} required/>
                    </Form.Item>
                    <Form.Item label="Image Url">
                        <AntInput value={edit.image} onChange={(e) => setEdit({...edit, image: e.target.value})} required/>
                    </Form.Item>
                    <Form.Item label="Ratings" />
                    <Form.Item label="Stars">
                        <AntInput value={edit.rating.rate} onChange={(e) => setEdit({...edit, rating: {...edit.rating, rate: e.target.value}})} required/>
                    </Form.Item>
                    <Form.Item label="No of People Reviewd">
                        <AntInput   value={edit.rating.count} onChange={(e) => setEdit({...edit, rating: {...edit.rating, count: e.target.value}})} required/>
                    </Form.Item>
                    <Button type="primary" visible={modalVisible} onClick={handleEditSubmit}>Submit</Button>
                </Form>
            </Modal>
            <Modal
            title="Add New Product Details"
            visible={modaladdVisible}
            onCancel={() => setaddModalVisible(false)}
            footer={null}
        >
            <Form
                onFinish={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 max-w-xl md:max-w-2xl w-full"
                layout="vertical"
                autoComplete="off"
            >
                <Form.Item label="Product ID" name="id" rules={[{ required: true, message: "Please Enter Product Id" }, { whitespace: true }]}>
                    <Input name="id" value={addform.id} onChange={handleAddChange} />
                </Form.Item>
                <Form.Item label="Product Name" name="title" rules={[{ required: true, message: "Please Enter Product Name" }, { whitespace: true }]}>
                    <Input name="title" value={addform.title} onChange={handleAddChange} />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{ required: true, message: "Please Enter Product Description" }, { whitespace: true }]}>
                    <Input name="description" value={addform.description} onChange={handleAddChange} />
                </Form.Item>
                <Form.Item label="Category" name="category" rules={[{ required: true, message: "Please Enter Category" }, { whitespace: true }]}>
                    <Input name="category"  value={addform.category} onChange={handleAddChange} />
                </Form.Item>
                <Form.Item label="Price" name="price" rules={[{ required: true, message: "Please Enter Product Price" }, { whitespace: true }]}>
                    <Input name="price" value={addform.price} onChange={handleAddChange} />
                </Form.Item>
                <Form.Item label="Image Url" name="image" rules={[{ required: true, message: "Please Enter Image URL" }, { whitespace: true }]}>
                    <Input name="image" value={addform.image} onChange={handleAddChange} />
                </Form.Item>
                <Form.Item label="Ratings" />
                <Form.Item label="Stars" name="rate" rules={[{ required: true, message: "Please Enter Product Ratings in Stars" }, { whitespace: true }]}>
                    <Input name="rate" value={addform.rating.rate} onChange={handleAddChange} />
                </Form.Item>
                <Form.Item label="No of People Reviewed" name="count" rules={[{ required: true, message: "Please Enter Product Reviews" }, { whitespace: true }]}>
                    <Input name="count" value={addform.rating.count} onChange={handleAddChange} />
                </Form.Item>
                <Form.Item>
                    <Button className="w-full" type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
  </div>
    );
}

export default Tasks;
