import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import LeftAside from '../components/homelayout/LeftAside'
import RightAside from '../components/homelayout/RightAside'

const HomeLayout = () => {
  return (
    <div>
        <header>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto'>
              <Navbar></Navbar>

            </nav>
        </header>
        <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
            <aside className='col-span-2'>
                <LeftAside></LeftAside>
            </aside>
            <section className="main col-span-8">
                <Outlet></Outlet>
            </section>
            <aside className='col-span-2'>
                <RightAside></RightAside>
            </aside>
        </main>
    </div>
  )
}

export default HomeLayout