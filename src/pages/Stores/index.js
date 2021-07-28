/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "antd";
import sampleThumbnail from "../../assets/RedStore/images/user-2.png";
import "./Stores.css";
const Stores = () => {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);

  const baseURL = "http://localhost:8080";
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    withCredentials: true,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/dorayaki-store")
      .then((res) => {
        setData(res.data);
        setisLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemove = async (id) => {
    console.log("WOIIIIIIIIIIi");
    axiosInstance
      .delete(`/dorayaki-store/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="store-container">
        <div className="column-store">
          {!isLoading &&
            data.map((obj) => (
              <div className="column-stores-card" key={obj.ID}>
                <div className="column-latest-thumbnail">
                  <img className="column-latest-img" src={sampleThumbnail} />
                </div>
                <div className="column-latest-1 stores"> {obj.Nama}</div>

                <div className="column-latest-alamat">
                  <div className="column-latest-deskripsi">{obj.Jalan}</div>
                  <div className="column-latest-deskripsi">{obj.Kecamatan}</div>
                  <div className="column-latest-deskripsi">{obj.Provinsi}</div>
                </div>
                <Link className="store-edit-link" to={`/stores/edit/${obj.ID}`}>
                  <Button className="edit-btn" type="primary">
                    Edit Store
                  </Button>
                </Link>
                <Button
                  className="remove-btn"
                  type="danger"
                  onClick={() => handleRemove(obj.ID)}
                >
                  Remove Store
                </Button>
                <div className="column-latest-footer"></div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Stores;
