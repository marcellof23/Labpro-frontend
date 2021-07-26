/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import sampleThumbnail from "../../assets/RedStore/images/user-2.png";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { Button, Input, Form, message, Spin } from "antd";

import "antd/dist/antd.css";
import "./EditStores.css";

const EditStoresPage = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const [isLoadingProps, setIsLoadingProps] = useState(true);
  const [isLoadingStock, setIsLoadingStock] = useState(true);
  const [storeValue, setStoreValue] = useState({
    Nama: "",
    Jalan: "",
    Kecamatan: "",
    Provinsi: "",
  });

  const [storeStockValue, setStoreStockValue] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/dorayaki-store/${id}`)
      .then((res) => {
        setStoreValue(res.data);
        setTimeout(() => {
          setIsLoadingProps(false);
        }, 750);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/dorayaki/store/${id}`)
      .then((res) => {
        setStoreStockValue(res.data);
        setTimeout(() => {
          setIsLoadingStock(false);
        }, 750);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const checkInputs = async () => {
    try {
      await form.validateFields();
      message.success("Form validation Successfull", 1.5);
      return true;
    } catch (errorInfo) {
      message.error(
        "Form validation not successfull, please check your input",
        1.5
      );
      return false;
    }
  };

  const handleSubmit = async () => {
    const isInputValid = await checkInputs();
    if (!isInputValid) {
      return;
    }
    const body = {
      nama: storeValue.Nama,
      jalan: storeValue.Jalan,
      kecamatan: storeValue.Kecamatan,
      provinsi: storeValue.Provinsi,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/dorayaki-store",
        body
      );
      if (res) {
        setTimeout(() => {
          message.success("Anda telah berhasil menambahkan stok dorayaki");
        }, 2000);
      }
    } catch (err) {
      setTimeout(() => {
        message.error(err.response.data.message);
      }, 2000);
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setStoreValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (isLoadingProps && isLoadingStock) {
    return (
      <main className="loading-screen">
        <Spin size="large" />
      </main>
    );
  }
  return (
    <>
      <Layout>
        <div className="store-container">
          <div className="store-form">
            <div className="store-form-title">Edit Dorayaki Store</div>
            <Form layout="vertical" form={form} className="event-content">
              <Form.Item
                label="Nama Toko"
                name="nama"
                initialValue={storeValue.Nama}
                rules={[
                  { required: true, message: "Please input your Nama Toko!" },
                ]}
              >
                <Input
                  name="nama"
                  value={storeValue.Nama}
                  className="form-input nama"
                  placeholder="Masukkan input nama toko"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Jalan Toko"
                name="Jalan"
                initialValue={storeValue.Jalan}
                rules={[
                  {
                    required: true,
                    message: "Please input your Jalan Toko!",
                  },
                ]}
              >
                <Input
                  name="Jalan"
                  value={storeValue.Jalan}
                  className="form-input Jalan"
                  placeholder="Masukkan input Jalan"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Kecamatan Toko"
                name="Kecamatan"
                initialValue={storeValue.Kecamatan}
                rules={[
                  {
                    required: true,
                    message: "Please input your Kecamatan Toko!",
                  },
                ]}
              >
                <Input
                  name="Kecamatan"
                  value={storeValue.Kecamatan}
                  className="form-input Kecamatan"
                  placeholder="Masukkan input Kecamatan"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Provinsi Toko"
                name="Provinsi"
                initialValue={storeValue.Provinsi}
                rules={[
                  {
                    required: true,
                    message: "Please input your Provinsi Toko!",
                  },
                ]}
              >
                <Input
                  name="Provinsi"
                  value={storeValue.Provinsi}
                  className="form-input Provinsi"
                  placeholder="Masukkan input Provinsi"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Button
                className="submit-add-dorayaki"
                type="primary"
                onClick={() => handleSubmit()}
              >
                Add Dorayaki Store
              </Button>
            </Form>
          </div>
          <div className="column-store-stock">
            {storeStockValue.map((obj) => (
              <div className="column-stores-stock-card" key={obj.ID}>
                <div className="column-latest-thumbnail">
                  <img src={sampleThumbnail} />
                </div>
                <div className="column-latest-rasa"> {obj.Rasa}</div>
                <div className="column-latest-deskripsi">{obj.Deskripsi}</div>
                <div className="column-latest-deskripsi">{obj.Jumlah}</div>
              </div>
            ))}
          </div>
          <div className="store-stock">Current Variant</div>
        </div>
      </Layout>
    </>
  );
};

export default EditStoresPage;