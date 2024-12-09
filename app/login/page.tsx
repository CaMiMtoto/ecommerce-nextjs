"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
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
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";

const formSchema = z.object({
    email: z.string().min(2).max(50).email(),
    password: z.string().min(2).max(50),
})
export default function LoginPage() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return <div className={'min-h-screen flex flex-col justify-between'}>
        <div className="flex flex-col justify-center h-full flex-grow">
            <div></div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-32 w-auto" src="/logo.png" alt="Logo" />
                <Card
                    className="shadow-none lg:shadow-sm border-0 lg:border lg:border-zinc-200 rounded-none lg:rounded-lg">
                    <CardHeader>
                        <CardTitle>
                            <h4 className={'text-2xl font-semibold  mb-4 leading-snug tracking-wide text-primary'}>
                                Sign In
                            </h4>
                        </CardTitle>
                        <CardDescription>
                            <p className={''}>
                                Sign in to your account to continue.
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Email address" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Password" type="password" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full">Sign In</Button>
                            </form>
                        </Form>
                        <p className="mt-6 text-center text-xs text-gray-600">
                            Don&#39;t you remember your password?{" "}
                            <a className="text-blue-600 hover:text-blue-500">
                                Reset it
                            </a>
                        </p>

                    </CardContent>
                </Card>
            </div>
        </div>
        <footer className="mt-6 text-center text-xs text-gray-600 bg-gray-100 py-3 px-10 w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-md flex justify-between items-center">
                <Link href="/">Home</Link>
                <p>
                    &copy; {new Date().getFullYear()} My App. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
        ;
}