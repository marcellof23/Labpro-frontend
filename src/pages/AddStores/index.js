import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Button, Input, Form, message } from "antd";

import "antd/dist/antd.css";
import "./AddStores.css";
import { customAxios } from "../../modules/axios";

const AddStoresPage = () => {
  const [form] = Form.useForm();

  const [storeValue, setstoreValue] = useState({
    nama: "",
    jalan: "",
    kecamatan: "",
    provinsi: "",
  });

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
      nama: storeValue.nama,
      jalan: storeValue.jalan,
      kecamatan: storeValue.kecamatan,
      provinsi: storeValue.provinsi,
    };

    try {
      const res = await customAxios.post("/dorayaki-store", body);
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
    e.preventDefault();
    const { name, value } = e.target;
    setstoreValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Layout>
        <div className="store-container">
          <div className="store-form">
            <div className="store-form-title">Add New Dorayaki Store</div>
            <Form layout="vertical" form={form} className="event-content">
              <Form.Item
                label="Nama Toko"
                name="nama"
                rules={[
                  { required: true, message: "Please input your Nama Toko!" },
                ]}
              >
                <Input
                  name="nama"
                  value={storeValue.nama}
                  className="form-input nama"
                  placeholder="Masukkan input nama toko"
                  onChange={handleInputChange}
                />
              </Form.Item>
              <Form.Item
                label="Jalan Toko"
                name="Jalan"
                rules={[
                  { required: true, message: "Please input your Jalan Toko!" },
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

          <div className="store-stock">Current Variant</div>
        </div>
      </Layout>
    </>
  );
};

export default AddStoresPage;
