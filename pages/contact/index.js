import { useRouter } from "next/router";
import { getClient } from "../../libs/client";
import { useState } from "react";

const PostForm = () => {
  const client = getClient();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    textarea: "",
  });
  const [validationError, setValidationError] = useState({
    name: "",
    mail: "",
    textarea: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // 入力値が変更されたら、関連するバリデーションエラーメッセージをクリアする
    setValidationError({
      ...validationError,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newValidationError = {
      name: "",
      mail: "",
      textarea: "",
    };

    // 各項目が空でないか確認
    if (formData.name.trim() === "") {
      newValidationError.name = "Name is required";
      isValid = false;
    }

    if (formData.mail.trim() === "") {
      newValidationError.mail = "Mail is required";
      isValid = false;
    } else if (!isValidEmail(formData.mail.trim())) {
      newValidationError.mail = "Invalid email address";
      isValid = false;
    }

    if (formData.textarea.trim() === "") {
      newValidationError.textarea = "Textarea is required";
      isValid = false;
    }

    setValidationError(newValidationError);
    return isValid;
  };

  const isValidEmail = (email) => {
    // 簡単なメールアドレスの正規表現
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // バリデーションを実行
    if (!validateForm()) {
      console.error("Form validation failed");
      return;
    }

    try {
      const response = await client.create({
        endpoint: "contact",
        content: {
          name: formData.name,
          mail: formData.mail,
          textarea: formData.textarea,
        },
      });

      console.log("Post successful:", response);
      // 送信成功後、/thanks ページにリダイレクト
      router.push("/thanks");

    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{validationError.name}</span>
        </label>
        <br />
        <label>
          Mail:
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
          />
          <span style={{ color: "red" }}>{validationError.mail}</span>
        </label>
        <br />
        <label>
          Textarea:
          <textarea
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
          ></textarea>
          <span style={{ color: "red" }}>{validationError.textarea}</span>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PostForm;
