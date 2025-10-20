import React, { useEffect, useState } from "react";
import Header from "../Header";
import Right from "../HomeOutlet/Right";
import NewsDetailsCard from "../NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data=useLoaderData()
  const {id }=useParams()
  const [nesw, setNews]=useState({})

  useEffect(()=>{
    const  NewsDetails=data.find(singlenews=>singlenews.id==id)
    setNews(NewsDetails)
  },[data,id])
  return (
    <div>
      <header className="py-4">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-9">
          <h2 className="font-bold  mb-6">News Details</h2>
          <NewsDetailsCard news={nesw}></NewsDetailsCard>
        </section>
        <aside className="col-span-3 p-3">
          <Right></Right>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
