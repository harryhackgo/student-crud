import React, { FC } from "react";
import { Modal, Form, Input, Button } from "antd";
import type { FormProps } from "antd";
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from "../../redux/api/user.api";
import { DataType } from "../../pages/Home";

type FieldType = {
  name?: string;
  profession?: string;
};

interface Props {
  isModalOpen?: boolean;
  handleCancel: () => void;
  updateUser?: undefined | DataType | null;
}

const ModalWrapper: FC<Props> = ({ isModalOpen, handleCancel, updateUser }) => {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [editUser, { isLoading: isUpdateLoading }] = useUpdateUserMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (updateUser) {
      await editUser({ id: updateUser.id, body: values }).unwrap();
    } else {
      await createUser(values).unwrap();
    }

    handleCancel();
  };
  return (
    <Modal
      title={`${updateUser ? "Update" : "Create"} user`}
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
    >
      <Form
        name="basic"
        initialValues={updateUser || { remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Profession"
          name="profession"
          rules={[{ required: true, message: "Please input your profession!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            loading={isLoading || isUpdateLoading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default React.memo(ModalWrapper);
