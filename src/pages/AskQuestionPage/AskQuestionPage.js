import React, { useState } from "react";
import axios from "axios";
import css from "./askquestion.module.css";
import { toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
toast.configure();
require("dotenv").config();
const API = process.env.REACT_APP_API_URL;


const AskQuestionPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    tags: "",
  });
  const [errorData, setErrorData] = useState({
    titleError: "",
    bodyError: "",
    tagsError: "",
  });
  const validate = () => {
    let titleError = "";
    let bodyError = "";
    let tagsError = "";
    if (!formData.title) {
      titleError = "Title Missing";
    }
    if (!formData.body) {
      bodyError = "Body Missing";
    }
    if (!formData.tags) {
      tagsError = "Enter atleast 1 Tag";
    }
    if (titleError || bodyError || tagsError) {
      setErrorData({ titleError, bodyError, tagsError });
      return false;
    }
    return true;
  };

  const userData = window.localStorage.getItem("userdata").split("~");

  const handleInputData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    let splitTags = formData.tags.replace(/\s+/g, " ").trim().split(" ");
    let token = window.localStorage.getItem("userdata").split("~")[2];

    const config = {
      headers: {
        authorization: `bearer ${token}`,
      },
    };
    validate();
    // const isValid = validate();
    // if (!isValid) {
    //   alert("invalid");
    //   console.log(formData, errorData);
    // }
    if (splitTags.length > 0) {
      try {
        await axios.post(
          `${API}/post/question`,
          {
            userID: userData[0],
            userName: userData[1],
            title: formData.title,
            body: formData.body,
            tags: splitTags,
          },
          config
        );
        toast.success("Posted successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.log(error);
      }
      // CATCH ERROR
      setFormData({
        title: "",
        body: "",
        tags: "",
      });
    }
  };
  const { title, body, tags } = formData;
  const { titleError, bodyError, tagsError } = errorData;
  return (
    <>
      <div className="mt-5 mb-5">
        <div className="container">
          <h3 className={css.header}>Ask a Public Question</h3>
          <div className="card shadow mt-5 mb-3">
            <div className="card-body">
              <form>
                <div className="titlefield mb-2">
                  <label className={`form-label ${css.label}`}>Title</label>
                  <p className="card-subtitle mb-2 text-muted small">
                    Be specific and imagine you???re asking a question to another
                    person
                  </p>
                  <input
                    className={`mb-3 w-100 p-1 small title-input ${css.title_input}`}
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => handleInputData(e)}
                    id="title"
                    placeholder="e.g. How to return the reposnse from an asynchronous call?"
                    required
                  />
                  <div className={css.error}>{titleError}</div>
                </div>
                <div className="bodyfield mb-2">
                  <label className={`form-label ${css.label}`}>Body</label>
                  <p className="card-subtitle mb-2 text-muted small">
                    Include all the information someone would need to answer
                    your question
                  </p>

                  <textarea
                    className={`mb-3 w-100 p-1 ${css.text_input}`}
                    name="body"
                    rows="12"
                    cols="20"
                    value={body}
                    onChange={(e) => handleInputData(e)}
                    placeholder="Enter body with minimum 30 characters"
                    id="body"
                    required
                  />
                  <div className={css.error}>{bodyError}</div>
                </div>
                <div className="tagsfield mb-2">
                  <label className={`form-label ${css.label}`}>Tags</label>
                  <p className="card-subtitle mb-2 text-muted small">
                    Add up to 5 tags to describe what your question is about
                  </p>
                  <input
                    className={`mb-3 w-100 p-1 small tag-input ${css.tag_input}`}
                    type="text"
                    name="tags"
                    id="tagname"
                    value={tags}
                    onChange={(e) => handleInputData(e)}
                    placeholder="e.g. react javascript nodeJS express etc."
                    required
                  />
                  <div className={css.error}>{tagsError}</div>
                </div>
              </form>
            </div>
          </div>
          <button
            className={`btn mt-3 ml-4 ${css.btn_color}`}
            id="submit-button"
            onClick={(e) => handlesubmit(e)}
            name="submit-button"
          >
            Post Your Question
          </button>
        </div>
      </div>
    </>
  );
};

export default AskQuestionPage;
