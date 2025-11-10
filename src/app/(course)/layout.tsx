import * as React from 'react';

import { CourseSidebar } from '@/components/course/CourseSidebar';
import { dummyCourseData } from '@/lib/dummyData';

export default function CourseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Using dummy data for demonstration
    const { userId, course, chapters } = dummyCourseData;

    return (
        <div className="h-full">
            {/* <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
                <CourseNavbar
                    course={course}
                    chapters={chapters}
                // progressCount={progressCount}
                />
            </div> */}

            <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
                <CourseSidebar
                    userId={userId}
                    course={course}
                    chapters={chapters}
                // progress={progressCount}
                />
            </div>
            <main className="md:pl-80 h-full pt-[80px]">
                {children}
            </main>
        </div>
    );
}
