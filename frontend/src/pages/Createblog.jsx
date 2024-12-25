import { useState } from "react";
import './Createblog'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Createblog.css'

function Createblog() {
  // Initial form data
  const initialValues = {
    title: "",
    content: "",
    thumbnail: null,
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    title: Yup.string().required("Blog title is required"),
    content: Yup.string().required("Blog content is required"),
    thumbnail: Yup.mixed()
      .required("Blog thumbnail is required")
      .test("fileType", "Unsupported File Format", (value) =>
        value ? ["image/jpeg", "image/png"].includes(value.type) : true
      ),
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form data submitted:", values);
    // Handle form data (send to API, etc.)
  };

  return (
    <div className="Createblog-page">
      <div className="create-blog">
        <h2>Create a New Blog</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="title">Blog Title:</label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your blog title"
                  className="input-field"
                />
                <ErrorMessage name="title" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="content">Blog Content:</label>
                <Field
                  as="textarea"
                  id="content"
                  name="content"
                  placeholder="Write your blog content here..."
                  className="input-field"
                />
                <ErrorMessage name="content" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="thumbnail">Blog Thumbnail:</label>
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  onChange={(e) => setFieldValue("thumbnail", e.target.files[0])}
                  accept="image/*"
                  className="input-field"
                />
                <ErrorMessage name="thumbnail" component="div" className="error" />
              </div>

              <button type="submit">Create Blog</button>
            </Form>
          )}
        </Formik>
      </div>
    </div >
  );
}

export default Createblog;
