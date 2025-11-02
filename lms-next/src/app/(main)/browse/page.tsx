

import { dummyCategories } from "@/lib/dummy-data";

import { Categories } from "@/components/course-list/Categories";
import { CourseList } from '@/components/course-list/CourseList';
import { SearchInput } from "@/components/SearchInput";

import { getCourses } from "@/actions/get-courses";

interface searchPageProps {
    searchParams: {
        title?: string,
        categoryId: string
    }
}

const SearchPage = async ({ searchParams }: searchPageProps) => {
    // Mock user always logged in
    const userId = "demo_user";

    const categories = dummyCategories;

    const courses = await getCourses({ userId, ...searchParams })

    return (
        <>
            <div className="px-6 pt-6 md:hidden md:mb-0 block">
                <SearchInput />
            </div>
            <div className="p-6">
                <Categories items={categories} />
                <CourseList items={courses} />
            </div>
        </>
    );
};

export default SearchPage;
