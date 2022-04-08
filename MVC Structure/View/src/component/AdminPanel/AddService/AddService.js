import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

export default function AddBook() {
  const { register, handleSubmit } = useForm();
  const [imageURL, setIMageURL] = useState();

  const onSubmit = (data) => {
    console.log(data);
    console.log(imageURL);

    const eventData = {
      name: data.name,
      details: data.details,
      imageURL: imageURL,
    };
    console.log(eventData);
    const url = `https://shielded-savannah-63633.herokuapp.com/addService`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
  };

  const handleUploadImage = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "62b88432b5e84dae088a7ceaf32bcd08");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <label>Service name </label>
          <br></br>
          <input className="form-control" {...register("name")} />
          <br></br>
          <label>Description</label>
          <br></br>
          <input className="form-control" {...register("details")} />
          <br></br>
          <label>Upload image</label>
          <br></br>
          <input type="file" onChange={handleUploadImage} />
          <br />
          <input className="btn btn-success mt-3" type="submit" />
        </form>
      </div>
    </div>
  );
}
