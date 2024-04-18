import React, { useState,useEffect } from "react";
import {Space,Tag,Table} from "antd";
function Tasks(){
    const [data,setdata]=useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setdata(data);
          });
      }, []);
      const columns = [
        {
          title: 'Product Name',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Catogery',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Ratings',
          dataIndex: 'rate',
          key: 'rate',

        },
        {
            title: 'Reviews',
            dataIndex: 'count',
            key: 'count',
            
          },
          {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            
          },
      ];
      const tabledata=[(data.map((row)=>{
          


      }))]
    return(
        <div>
            <div >
                <div className="p-4 border border-gray-500" >
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </div>
    )
}

export default Tasks;