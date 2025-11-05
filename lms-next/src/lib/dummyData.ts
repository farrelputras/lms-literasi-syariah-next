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

// Dummy course data for course layout
export const dummyCourseData = {
    userId: 'user-123',
    course: {
        title: 'Dasar-Dasar Fiqih Muamalah',
        purchased: {
            'user-123': true, // Current user has purchased
        },
    },
    chapters: [
        {
            _id: 'ch-1',
            courseId: 'course-1',
            title: 'Pengenalan Fiqih Muamalah',
            isCompleted: {
                'user-123': true,
            },
            isFree: true,
        },
        {
            _id: 'ch-2',
            courseId: 'course-1',
            title: 'Prinsip-Prinsip Jual Beli dalam Islam',
            isCompleted: {
                'user-123': true,
            },
            isFree: true,
        },
        {
            _id: 'ch-3',
            courseId: 'course-1',
            title: 'Akad dan Jenisnya',
            isCompleted: {
                'user-123': false,
            },
            isFree: false,
        },
        {
            _id: 'ch-4',
            courseId: 'course-1',
            title: 'Riba dan Larangan dalam Muamalah',
            isCompleted: {
                'user-123': false,
            },
            isFree: false,
        },
        {
            _id: 'ch-5',
            courseId: 'course-1',
            title: 'Mudharabah dan Musyarakah',
            isCompleted: {
                'user-123': false,
            },
            isFree: false,
        },
        {
            _id: 'ch-6',
            courseId: 'course-1',
            title: 'Sistem Ekonomi Syariah Modern',
            isCompleted: {
                'user-123': false,
            },
            isFree: false,
        },
    ],
};