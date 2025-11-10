import { redirect } from 'next/navigation';

import { dummyCourseData } from '@/lib/dummyData';

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
    // Use dummy data instead of API call
    const courseChapters = dummyCourseData.chapters;

    if (!courseChapters || courseChapters.length === 0) {
        return redirect("/");
    }

    return redirect(
        `/course/${params.courseId}/chapters/${courseChapters[0]._id}`
    );
};

export default CourseIdPage;
