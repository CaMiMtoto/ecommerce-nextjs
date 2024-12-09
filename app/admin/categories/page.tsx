"use client"
import AdminLayout from "@/components/layouts/admin-layout";
import {DataTable} from "@/app/admin/categories/data-table";
import {columns} from "@/app/admin/categories/columns";
import {useEffect, useState} from "react";
import Category from "@/types/Category";
import {http} from "@/services/httpService";

type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
    {
        id: "12345678",
        amount: 200,
        status: "success",
        email: "jeanpaul@example.com",
    },
]

export default function CategoriesPage() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const {data} = await http.get<Category[]>("/categories");
            setCategories(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError("Failed to fetch categories.");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCategories().then(r => {
            console.log(r);
        });
    }, []);


    return (
        <AdminLayout>
            <div>
                <h1 className={"text-2xl font-bold"}>Categories</h1>
                <p className={"text-gray-500 text-sm"}>
                    Below is the list of all categories. You can add, edit, or delete categories from this page.
                </p>
            </div>
            <div className="container mx-auto pb-10">
                <DataTable columns={columns} data={categories}/>
            </div>
        </AdminLayout>
    )
}