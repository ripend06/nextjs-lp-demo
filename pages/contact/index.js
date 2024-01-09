import { getClient } from "../../libs/client";
import { useState } from "react";

const PostForm = () => {
  const client = getClient();
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    textarea: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await client.create({
        endpoint: "contact", // 作成したAPIのエンドポイント
        content: {
          name: formData.name,
          mail: formData.mail,
          textarea: formData.textarea,
        },
      });

      console.log("Post successful:", response);
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
        </label>
        <br />
        <label>
          Mail:
          <input
            type="text"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Textarea:
          <textarea
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PostForm;
