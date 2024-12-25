"use client"

import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

const formSchema = z.object({
    name: z.string().min(2).max(50),
});
import AdminLayout from "@/components/layouts/admin-layout";
import {useEffect, useState} from "react";
import Category from "@/types/Category";
import {http} from "@/services/httpService";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import Date from "@/lib/date";
import {Pencil} from "lucide-react";
import {Button} from "@/components/ui/button";


export default function CategoriesPage() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

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
                <div className={'grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-2'}>
                    <div>
                        <Input placeholder="Search by name" className={'w-full mb-4'}/>
                        <Card className={'shadow-none rounded-lg'}>

                            <CardContent>
                                <Table>
                                    <TableCaption>
                                        A List of all categories .
                                    </TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[150px]">Created At</TableHead>
                                            <TableHead>Name</TableHead>
                                            <TableHead className=""></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {
                                            categories && categories.map((category, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <Date dateString={category.createdAt.toString()}/>
                                                    </TableCell>
                                                    <TableCell>{category.name}</TableCell>
                                                    <TableCell className="">
                                                        <Button variant="default"
                                                                className={'rounded-full mr-2 text-sm  inline-flex items-center justify-center w-8 h-8 hover:bg-gray-200'}>
                                                            <Pencil/>
                                                        </Button>
                                                        <Button variant="destructive"
                                                                className={'rounded-full mr-2 text-sm  inline-flex items-center justify-center w-8 h-8 '}>
                                                            <Pencil/>
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card className={'shadow-none rounded-lg'}>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                                    <CardHeader>
                                        <CardTitle>
                                            Add New Category
                                        </CardTitle>
                                        <CardDescription>
                                            Add a new category to the list.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <FormField
                                            control={form.control} name="name"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Name" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                    <CardFooter className={'justify-start gap-4'}>
                                        <Button variant="default">
                                            Save changes
                                        </Button>
                                        <Button variant="destructive">
                                            Cancel
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Form>
                        </Card>

                    </div>
                </div>

            </div>
        </AdminLayout>
    )
}