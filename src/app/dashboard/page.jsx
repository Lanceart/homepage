"use client";
import React, { Component, useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";

// import YourComponent from "@/components/UpdateForm/updateform";

// const [data,setData] = useState([]);
// const [err,setErr] = useState(false);
// const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     const getData = async () => {
//       setIsLoading(true);
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         cache: "no-store",
//       });

//       if (!res.ok) {
//         setErr(true);
//       }

//       const data = await res.json()

//       setData(data);
//       setIsLoading(false);
//     };
//     getData()
//   }, []);



const Dashboard = ()=>{
    const session  = useSession();
    const router = useRouter();
    const [showform, setshowform] = useState(null);
    
    
    const [formData, setFormData] = useState({
      title: '',
      desc: '',
      img: '',
      content: '',
      p_id: '',
    });
    

    
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const {data,mutate, error,isLoading} = useSWR(
        `/api/posts?username=${session?.data?.user.name}`,
        fetcher
        );
    // console.log(data); 
    if(session.status === 'loading'){
        return <p>Loading...</p>
    }
    if(session.status === 'unauthenticated'){
        router?.push("/dashboard/login");
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;
    
        try {
          await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
              title,
              desc,
              img,
              content,
              username: session.data.user.name,
            }),
          });
          mutate();
          e.target.reset()
        } catch (err) {
          console.log(err);
        }
      };

    const handleDelete = async (id) => {
        try {
          await fetch(`/api/posts/${id}`, {
            method: "DELETE",
          });
          mutate();
        } catch (err) {
          console.log(err);
        }
      };

      const handleEdit = async (post) => {
        // console.log(post._id);
        try{
          setFormData({
            title : post.title,
            desc : post.desc,
            img : post.img,
            content : post.content,
            p_id: post._id,
          });
          setshowform(!showform);
          
        }catch (err) {
          console.log(err);
        }
        
        // You can either populate a form with this data or show a modal to update the data.
        // console.log('Editing post:', post);
        // Populate form fields or open a modal here.
      };
      const handleChange = (e) => {

        // const newFormData = { ...formData, title: e.target.value };
        // setFormData(newFormData);
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleUpdate = async(e)=> {
     
        e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;
        const p_id = e.target[4].value;
        console.log(title);
        try {
          // console.log("Sending the following data:", {
          //   title,
          //   desc,
          //   img,
          //   content,
          //   username: session.data.user.name,
          // });
          const response = await fetch(`/api/posts/${p_id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json" // IMPORTANT: specify that you're sending JSON
            },
            body: JSON.stringify({
              title,
              desc,
              img,
              content,
              username: session.data.user.name,
              
            }),
            
          });
          // console.log('Fetch Response:', response);
          const responseData = await response.json();
          // console.log('Response Data:', responseData);
          if (response.ok) {
            mutate();
            e.target.reset();
          } else {
            console.error("Failed to update post:", responseData);
          }
          // mutate();e.target.reset()
        } catch (err) {
          console.log(err);
        }
      };
    // const [data,setData] = useState([])
    if(session.status === 'authenticated'){
        return <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.update}
                    onClick={() => handleEdit(post)}
                  >
                    =
                  </span>
                  
                  {/* <YourComponent id={post._id} /> */}
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        
          {showform && (
            <div>
              <form className={styles.new} onSubmit={handleUpdate}>
                <h1>Update The Post</h1>
                <input type="text" name="title" placeholder="Title" className={styles.input} value={formData.title} onChange={handleChange}/>
                <input type="text" name="desc" placeholder="Desc" className={styles.input} value={formData.desc} onChange={handleChange}/>
                <input type="text" name ="img" placeholder="Image" className={styles.input} value={formData.img} onChange={handleChange}/>
                <textarea
                  name="content"
                  placeholder="Content"
                  className={styles.textArea}
                  cols="30"
                  rows="10"
                  value={formData.content}
                  onChange={handleChange}
                ></textarea>
                <input type="text" name ="p_id" placeholder="p_id" className={styles.input} value={formData.p_id} onChange={handleChange} hidden/>

                <button className={styles.button}>Update</button>
              </form>


              <h3>Form Data:</h3>
              <p><strong>Title:</strong> </p>
              <p><strong>Description:</strong> {formData.desc}</p>
              <p><strong>Image URL:</strong> </p>
              <p><strong>Content:</strong> {formData.content}</p>
            </div>
          )}

        
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
        
      </div>
    }
};


export default Dashboard;