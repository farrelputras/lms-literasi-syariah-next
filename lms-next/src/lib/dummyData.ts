type Course = {
    _id: string;
    title: string;
    imageUrl: null;
    price: number;
    progress: number | null;
    category: string;
    chaptersLength: number;
};

type DashboardCourses = {
    completedCourses: Course[];
    courseInProgress: Course[];
};

export const dummyDashboardData: DashboardCourses = {
    completedCourses: [
        {
            _id: '1',
            title: 'Introduction to React',
            imageUrl: null,
            price: 49.99,
            progress: 100,
            category: 'Web Development',
            chaptersLength: 12,
        },
        {
            _id: '2',
            title: 'Advanced TypeScript',
            imageUrl: null,
            price: 59.99,
            progress: 100,
            category: 'Programming',
            chaptersLength: 8,
        },
    ],
    courseInProgress: [
        {
            _id: '3',
            title: 'Next.js 14 Masterclass',
            imageUrl: null,
            price: 79.99,
            progress: 65,
            category: 'Web Development',
            chaptersLength: 15,
        },
        {
            _id: '4',
            title: 'UI/UX Design Fundamentals',
            imageUrl: null,
            price: 44.99,
            progress: 30,
            category: 'Design',
            chaptersLength: 20,
        },
    ],
};