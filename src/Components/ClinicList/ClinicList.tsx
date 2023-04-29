import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  RadioChangeEvent,
  Row,
  Select,
  Steps,
  Typography,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { RequiredMark } from "antd/es/form/Form";
import { Footer } from "antd/es/layout/layout";
import clinicImg from "../../../src/assets/clinic.png";
import "./ClinicList.css";

function ClinicList() {
  const [form] = Form.useForm();
  const { Option } = Select;

  const clinicProcessList = [
    {
      title: "ABOUT THE CLINIC",
    },
    {
      title: "CLINIC OWNER DETAILS",
    },
    {
      title: "CONSULTING DOCTOR(S)",
    },
    {
      title: "OTHER CLINIC STAFF",
    },
    {
      title: "SUBSCRIPTION PAYMENT",
    },
  ];

  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>(
    "optional"
  );
  const [buttonDisable, setButtonDisable] = useState(true);
  const [value, setValue] = useState(1);
  const [colorPickerValue, setColorPickerValue] = useState("#047dc7");
  const [phoneNumberField,setPhoneNumberField]=useState([{phoneNumber:''}])

  const addPhoneNumber =()=>{
    setPhoneNumberField([...phoneNumberField,{
      phoneNumber:''
    }])
  }

  const selectAfter = (
    <div
      style={{
        backgroundColor: colorPickerValue,
        width: "30px",
        height: "27px",
      }}
    ></div>
  );

  const selectBefore = (
    <Select defaultValue="add" style={{ width: 60 }}>
      <Option value="add"> +</Option>
      <Option value="minus">-</Option>
    </Select>
  );

  const themeRadioOnChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const onRequiredTypeChange = (_: any, allValues: any) => {
    if (
      allValues.clinicName !== undefined &&
      allValues.clinicName !== "" &&
      allValues.clinicName.match(/^[a-zA-Z ]+$/) &&
      allValues.officialEmailId !== undefined &&
      allValues.officialEmailId !== "" &&
      allValues.officialEmailId.match(/\S+@\S+\.\S+/) &&
      allValues.state !== undefined &&
      allValues.state !== "" &&
      allValues.state.match(/^[a-zA-Z ]+$/) &&
      allValues.country !== undefined &&
      allValues.country !== "" &&
      allValues.address !== undefined &&
      allValues.address !== "" &&
      allValues.zipcode !== undefined &&
      allValues.zipcode !== "" &&
      allValues.zipcode.match(/^\d{5}(-\d{4})?$/)
    ) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  return (
    <div className="cliniclog-container">
      <div className="add-clinic">Add Clinic</div>
      <Row>
        <Col span={5} className="about-clinic">
          <img src={clinicImg} alt="clinic-img" />
          <div style={{ padding: "20px" }}>
            <Steps
              progressDot
              current={0}
              direction="vertical"
              items={clinicProcessList}
            />
          </div>
        </Col>
        <Col span={19}>
          <Form
            form={form}
            layout="vertical"
            initialValues={{ requiredMarkValue: requiredMark }}
            onValuesChange={onRequiredTypeChange}
            // requiredMark={requiredMark}
            onFinish={()=>alert("Success")}
          >
            <Row style={{ padding: "14px" }}>
              <Col span={6} className="upload-logo-file">
                <Form.Item name="clinicLogo">
                  <Upload action="/upload.do" listType="picture-card">
                    <div>
                      <UploadOutlined style={{ color: "#64afdd" }} />
                      <div className="clinic-log-content">
                        Upload Clinic Logo
                      </div>
                    </div>
                  </Upload>
                </Form.Item>

                <Typography className="upload-description">
                  File size should not exceed 500 kbs
                </Typography>
              </Col>
              <Col span={18}>
                <div className="cliniclist-fields">
                  <Row gutter={{ xs: 8, sm: 16 }}>
                    <Col span={24} className="clinic-inputfield">
                      <Form.Item
                        label="CLINIC NAME"
                        name="clinicName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your clinic name!",
                          },
                          {
                            pattern: new RegExp(/^[a-zA-Z ]+$/),
                            message:
                              "Special Characters and Numbers Not Allowed",
                          },
                        ]}
                      >
                        <Input placeholder="Enter" type="text" />
                      </Form.Item>
                    </Col>
                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="OFFICIAL EAMIL ID"
                        name="officialEmailId"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email id!",
                          },
                          {
                            type:'email',
                            message: "The input is not valid E-mail!",
                          }
                        ]}
                      >
                        <Input placeholder="Enter" />
                      </Form.Item>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="ADDRESS"
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: "Please input your adress!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter" />
                      </Form.Item>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="CITY"
                        name="city"
                        rules={[
                          {
                            required: true,
                            message: "Please input your city!",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Select"
                          optionFilterProp="children"
                          options={[
                            {
                              value: "1",
                              label: "Trichy",
                            },
                          ]}
                        />
                      </Form.Item>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="STATE"
                        name="state"
                        rules={[
                          {
                            required: true,
                            message: "Please input your state!",
                          },
                          {
                            pattern: new RegExp(/^[a-zA-Z ]+$/),
                            message: "Enter valid state name!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter" />
                      </Form.Item>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="COUNTRY"
                        name="country"
                        rules={[
                          {
                            required: true,
                            message: "Please input your country!",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Select"
                          optionFilterProp="children"
                          options={[
                            {
                              value: "1",
                              label: "India",
                            },
                          ]}
                        />
                      </Form.Item>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="ZIPCODE"
                        name="zipcode"
                        rules={[
                          {
                            required: true,
                            message: "Please input your zipcode!",
                          },
                          {
                            pattern: new RegExp(/^\d{5}(-\d{4})?$/),
                            message: "Enter valid zip code!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter" />
                      </Form.Item>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="PRIMARY MOBILE #"
                        name="primaryMobile"
                        rules={[
                          {
                            required: true,
                            message: "Please input your primary mobile!",
                          },
                          
                        ]}
                      >
                        <InputNumber
                          addonBefore={selectBefore}
                          placeholder="Enter"
                          type={'number'}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="SECONDARY MOBILE #1"
                        name="secondaryMobile"
                        rules={[
                          {
                            required: true,
                            message: "Please input your secondary mobile!",
                          },
                        ]}
                      >
                        <InputNumber
                          addonBefore={selectBefore}
                          placeholder="Enter"
                        />
                      </Form.Item>
                    </Col>
                    
                    {phoneNumberField.map((data:any,index:any)=>{
                      return(
                        <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label={`SECONDARY MOBILE #${index + 2}`}
                        name={`secondaryMobile${index + 2}`}
                        rules={[
                          {
                            required: false,
                            message: "Please input your secondary mobile!",
                          },
                        ]}
                      >
                        <InputNumber
                          addonBefore={selectBefore}
                          placeholder="Enter"
                        />
                      </Form.Item>
                    </Col>
                      )
                    })}

                    <Col span={24} className="add-more-mobilenumber" onClick={addPhoneNumber}>
                      <span>+Mobile #</span>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="WEBSITE"
                        name="website"
                        rules={[
                          {
                            required: false,
                            message: "Please input your website!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter" />
                      </Form.Item>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="TWITTER HANDLE"
                        name="twitterHandle"
                        rules={[
                          {
                            required: false,
                            message: "Please input your twitter handle!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter" />
                      </Form.Item>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="META"
                        name="meta"
                        rules={[
                          {
                            required: false,
                            message: "Please input your meta!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter" />
                      </Form.Item>
                    </Col>

                    <Col span={8} className="clinic-inputfield">
                      <Form.Item
                        label="SOCIAL MEDIA HANDLE"
                        name="socialmediahandle"
                        rules={[
                          {
                            required: false,
                            message: "Please input your social media handle!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter" />
                      </Form.Item>
                    </Col>

                    <Col
                      span={8}
                      className="clinic-inputfield clinic-customize-theme"
                    >
                      <Form.Item
                        label="DO YOU WANT TO CUSTOMIZE THE APP THEME?"
                        name="socialMediaHandle"
                        rules={[
                          {
                            required: false,
                            message: "Please choose customize theme!",
                          },
                        ]}
                      >
                        <Radio.Group
                          onChange={themeRadioOnChange}
                          value={value}
                          size="small"
                        >
                          <Radio value={1}>No</Radio>
                          <Radio value={2}>Yes</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>

                    <Col span={8} className="color-picker ">
                      <Form.Item
                        label="APP THEME COLOUR"
                        name="themeColor"
                        rules={[
                          {
                            required: false,
                          },
                        ]}
                      >
                        <Input
                          defaultValue={colorPickerValue}
                          addonAfter={selectAfter}
                          onChange={(e) => setColorPickerValue(e.target.value)}
                          value={colorPickerValue}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Footer className="clicnic-footer">
              <Button className="cancel-cta" type="link">
                Cancel
              </Button>
              <Button className="save-and-proceed-cta" htmlType="submit">
                Save & Proceed
              </Button>
            </Footer>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default ClinicList;
