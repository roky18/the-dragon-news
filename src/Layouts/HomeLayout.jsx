import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import Left from "../Components/HomeOutlet/Left";
import Right from "../Components/HomeOutlet/Right";
import Loading from "../Components/Page/Loading";


const HomeLayout = () => {
  const { state } = useNavigate();
  return (
    <div>
      <header>
        <Header></Header>
        {import.meta.env.VITE_name}

        <section className="w-11/12 mx-auto my-4">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-4">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  grid gap-3 grid-cols-12">
        <aside className="col-span-3 sticky top-2 h-fit">
          <Left></Left>
        </aside>
        <section className="main col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-2 h-fit">
          <Right></Right>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
