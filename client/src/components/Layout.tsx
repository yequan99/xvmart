import { Outlet } from "react-router-dom"
import { Dispatch, SetStateAction } from 'react'
import Navbar from './Navbar'
import { CategoryProps } from '../types/mainTypes';

export default function Layout ({categories, setSelectedCategory, cartCount}: {categories: CategoryProps[], setSelectedCategory: Dispatch<SetStateAction<string>>, cartCount: number}) {
    return (
        <div>
            <Navbar categories={categories} setSelectedCategory={setSelectedCategory} cartCount={cartCount} />
            <div>
                <Outlet />
            </div>
        </div>
    )
}