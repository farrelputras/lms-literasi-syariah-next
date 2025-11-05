"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// import { isTeacher } from "@/lib/teacher";
import { Button } from "@/components/ui/button";

import { SearchInput } from "../SearchInput";



const NavbarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.startsWith("/teacher");
    const isCoursePage = pathname?.includes("/courses");
    const isBrowsePage = pathname === "/browse";

    return (
        <>
            {isBrowsePage && (
                <div className="hidden md:block">
                    <SearchInput />
                </div>
            )}
            <div className="flex gap-x-2 ml-auto">
                {/* {isTeacherPage || isCoursePage ? (
                    <Link href="/">
                        <Button size="sm" variant={"ghost"}>
                            <LogOut className="h-4 w-4 mr-2" />
                            Exit
                        </Button>
                    </Link>
                ) : isTeacher(userId!) ? (
                    <Link href="/teacher/courses">
                        <Button size="sm" variant={"ghost"}>
                            Teacher Mode
                        </Button>
                    </Link>
                ) : null}
                <UserButton afterSignOutUrl="/" />
                {!userId && (
                    <SignIn />
                )} */}
            </div>
        </>
    );
};

export default NavbarRoutes;
