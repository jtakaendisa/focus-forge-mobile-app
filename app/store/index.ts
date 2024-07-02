import { create } from 'zustand';
import uuid from 'react-native-uuid';

import { AuthUser, Habit, Task } from '../entities';
import { TODAYS_DATE } from '../constants';

interface AuthStore {
  authUser: AuthUser | null;
  setAuthUser: (authUser: AuthUser | null) => void;
}

interface TaskStore {
  tasks: Task[];
  searchQuery: string;
  selectedDate: Date;
  setTasks: (tasks: Task[]) => void;
  setSearchQuery: (searchQuery: string) => void;
  setSelectedDate: (selectedDate: Date) => void;
}

interface HabitStore {
  habits: Habit[];
  setHabits: (habits: Habit[]) => void;
}

export enum PriorityType {
  low = 'Low',
  normal = 'Normal',
  high = 'High',
}

const dummyTasks: Task[] = [
  {
    id: uuid.v4() as string,
    title: 'Complete project report',
    isCompleted: false,
    category: 'Work',
    dueDate: new Date('2024-07-02'),
    priority: 'High',
    note: 'Include all project milestones',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Draft introduction', isCompleted: false },
      { id: uuid.v4() as string, title: 'Analyze data', isCompleted: false },
      { id: uuid.v4() as string, title: 'Write conclusion', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Grocery shopping',
    isCompleted: false,
    category: 'Home',
    dueDate: new Date('2024-07-02'),
    priority: 'Normal',
    note: '',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { type: 'daily' },
    checklist: [
      { id: uuid.v4() as string, title: 'Buy vegetables', isCompleted: false },
      { id: uuid.v4() as string, title: 'Buy fruits', isCompleted: false },
      { id: uuid.v4() as string, title: 'Buy dairy', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Morning meditation',
    isCompleted: false,
    category: 'Meditation',
    dueDate: new Date('2024-07-02'),
    priority: 'Normal',
    note: '20 minutes session',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { type: 'daily' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Finish reading book',
    isCompleted: false,
    category: 'Recreation',
    dueDate: new Date('2024-05-24'),
    priority: 'Low',
    note: 'Last 3 chapters',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Attend yoga class',
    isCompleted: false,
    category: 'Health',
    dueDate: new Date('2024-05-25'),
    priority: 'Normal',
    note: '',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { type: 'daily' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Team meeting',
    isCompleted: false,
    category: 'Work',
    dueDate: new Date('2024-05-26'),
    priority: 'High',
    note: 'Discuss project deadlines',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Prepare slides', isCompleted: false },
      { id: uuid.v4() as string, title: 'Send agenda to team', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Visit the dentist',
    isCompleted: false,
    category: 'Health',
    dueDate: new Date('2024-05-27'),
    priority: 'High',
    note: 'Annual check-up',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { type: 'daily' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Call mom',
    isCompleted: false,
    category: 'Social',
    dueDate: new Date('2024-05-28'),
    priority: 'Normal',
    note: '',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { type: 'daily' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Plan weekend trip',
    isCompleted: false,
    category: 'Recreation',
    dueDate: new Date('2024-05-29'),
    priority: 'Normal',
    note: 'Look for hiking spots',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Book hotel', isCompleted: false },
      { id: uuid.v4() as string, title: 'Pack essentials', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Pay electricity bill',
    isCompleted: false,
    category: 'Finance',
    dueDate: new Date('2024-05-30'),
    priority: 'High',
    note: 'Due on the 31st',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { isRepeatedOn: ['Monday', 'Wednesday', 'Friday'], type: 'specific' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Water the plants',
    isCompleted: false,
    category: 'Home',
    dueDate: new Date('2024-05-31'),
    priority: 'Low',
    note: '',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { isRepeatedOn: ['Monday', 'Wednesday', 'Friday'], type: 'specific' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Submit tax documents',
    isCompleted: false,
    category: 'Finance',
    dueDate: new Date('2024-05-22'),
    priority: 'High',
    note: 'Include all receipts',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Collect receipts', isCompleted: false },
      { id: uuid.v4() as string, title: 'Fill forms', isCompleted: false },
      { id: uuid.v4() as string, title: 'Submit online', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Jog in the park',
    isCompleted: false,
    category: 'Sports',
    dueDate: new Date('2024-05-23'),
    priority: 'Normal',
    note: '5 km run',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { isRepeatedOn: ['Monday', 'Wednesday', 'Friday'], type: 'specific' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Clean the garage',
    isCompleted: false,
    category: 'Home',
    dueDate: new Date('2024-05-24'),
    priority: 'Low',
    note: 'Sort out old items',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Organize tools', isCompleted: false },
      { id: uuid.v4() as string, title: 'Throw out junk', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Cook dinner for friends',
    isCompleted: false,
    category: 'Social',
    dueDate: new Date('2024-05-25'),
    priority: 'Normal',
    note: 'Try new recipes',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Buy ingredients', isCompleted: false },
      { id: uuid.v4() as string, title: 'Prepare dessert', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Write blog post',
    isCompleted: false,
    category: 'Art',
    dueDate: new Date('2024-05-26'),
    priority: 'Normal',
    note: 'Topic: Spring gardening tips',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Start new painting',
    isCompleted: false,
    category: 'Art',
    dueDate: new Date('2024-05-27'),
    priority: 'Low',
    note: '',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Sketch outline', isCompleted: false },
      { id: uuid.v4() as string, title: 'Mix colors', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Buy new running shoes',
    isCompleted: false,
    category: 'Health',
    dueDate: new Date('2024-05-28'),
    priority: 'Normal',
    note: '',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Attend webinar on investment',
    isCompleted: false,
    category: 'Finance',
    dueDate: new Date('2024-05-29'),
    priority: 'Normal',
    note: 'Register in advance',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [{ id: uuid.v4() as string, title: 'Take notes', isCompleted: false }],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Update software on laptop',
    isCompleted: false,
    category: 'Work',
    dueDate: new Date('2024-05-30'),
    priority: 'Low',
    note: '',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Backup files', isCompleted: false },
      { id: uuid.v4() as string, title: 'Install updates', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Review budget for next month',
    isCompleted: false,
    category: 'Finance',
    dueDate: new Date('2024-06-01'),
    priority: 'High',
    note: '',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Create presentation for conference',
    isCompleted: false,
    category: 'Work',
    dueDate: new Date('2024-05-21'),
    priority: 'High',
    note: 'Include recent project data',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Outline topics', isCompleted: false },
      { id: uuid.v4() as string, title: 'Design slides', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Organize bookshelf',
    isCompleted: false,
    category: 'Home',
    dueDate: new Date('2024-05-22'),
    priority: 'Low',
    note: 'Donate old books',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Sort by genre', isCompleted: false },
      { id: uuid.v4() as string, title: 'Dust shelves', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Run 10k',
    isCompleted: false,
    category: 'Sports',
    dueDate: new Date('2024-05-23'),
    priority: 'High',
    note: 'Morning run',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Plan family BBQ',
    isCompleted: false,
    category: 'Social',
    dueDate: new Date('2024-05-24'),
    priority: 'Normal',
    note: 'Check weather forecast',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Invite family', isCompleted: false },
      { id: uuid.v4() as string, title: 'Buy meat and veggies', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Complete online course',
    isCompleted: false,
    category: 'Study',
    dueDate: new Date('2024-05-25'),
    priority: 'High',
    note: 'Final exam on Saturday',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Watch lectures', isCompleted: false },
      { id: uuid.v4() as string, title: 'Submit assignments', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Clean windows',
    isCompleted: false,
    category: 'Home',
    dueDate: new Date('2024-05-26'),
    priority: 'Low',
    note: 'Use new cleaning spray',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Start new hobby: Photography',
    isCompleted: false,
    category: 'Recreation',
    dueDate: new Date('2024-05-27'),
    priority: 'Normal',
    note: 'Join local photography club',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Buy camera', isCompleted: false },
      { id: uuid.v4() as string, title: 'Learn basics', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Host a dinner party',
    isCompleted: false,
    category: 'Social',
    dueDate: new Date('2024-05-28'),
    priority: 'Normal',
    note: 'Try a new recipe',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Prepare menu', isCompleted: false },
      { id: uuid.v4() as string, title: 'Set table', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'File insurance claim',
    isCompleted: false,
    category: 'Finance',
    dueDate: new Date('2024-05-29'),
    priority: 'High',
    note: 'Include accident report',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Collect documents', isCompleted: false },
      { id: uuid.v4() as string, title: 'Submit claim', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Meditate',
    isCompleted: false,
    category: 'Meditation',
    dueDate: new Date('2024-05-30'),
    priority: 'Low',
    note: 'Morning routine',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { isRepeatedOn: ['Monday', 'Wednesday', 'Friday'], type: 'specific' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Prepare for job interview',
    isCompleted: false,
    category: 'Work',
    dueDate: new Date('2024-05-31'),
    priority: 'High',
    note: 'Research company',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Update resume', isCompleted: false },
      {
        id: uuid.v4() as string,
        title: 'Practice interview questions',
        isCompleted: false,
      },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Weekly review and planning',
    isCompleted: false,
    category: 'Work',
    dueDate: new Date('2024-06-01'),
    priority: 'Normal',
    note: '',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { isRepeatedOn: ['Monday', 'Wednesday', 'Friday'], type: 'specific' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Fix leaky faucet',
    isCompleted: false,
    category: 'Home',
    dueDate: new Date('2024-05-21'),
    priority: 'Normal',
    note: '',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Buy new washer', isCompleted: false },
      { id: uuid.v4() as string, title: 'Install washer', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Volunteer at local shelter',
    isCompleted: false,
    category: 'Social',
    dueDate: new Date('2024-05-22'),
    priority: 'Normal',
    note: 'Morning shift',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { isRepeatedOn: ['Monday', 'Wednesday', 'Friday'], type: 'specific' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Update LinkedIn profile',
    isCompleted: false,
    category: 'Work',
    dueDate: new Date('2024-05-23'),
    priority: 'Low',
    note: 'Add recent job experiences',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Go hiking',
    isCompleted: false,
    category: 'Outdoor',
    dueDate: new Date('2024-05-24'),
    priority: 'Normal',
    note: 'Check trail conditions',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Meal prep for the week',
    isCompleted: false,
    category: 'Nutrition',
    dueDate: new Date('2024-05-25'),
    priority: 'Normal',
    note: 'Prepare healthy meals',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { isRepeatedEvery: 3, type: 'repeats' },
    checklist: [
      { id: uuid.v4() as string, title: 'Plan menu', isCompleted: false },
      { id: uuid.v4() as string, title: 'Cook meals', isCompleted: false },
    ],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Go for a bike ride',
    isCompleted: false,
    category: 'Sports',
    dueDate: new Date('2024-05-26'),
    priority: 'Normal',
    note: '',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Read a chapter of a book',
    isCompleted: false,
    category: 'Recreation',
    dueDate: new Date('2024-05-27'),
    priority: 'Low',
    note: '',
    isCarriedOver: false,
    isRecurring: true,
    frequency: { isRepeatedEvery: 3, type: 'repeats' },
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Buy birthday gift for friend',
    isCompleted: false,
    category: 'Social',
    dueDate: new Date('2024-05-28'),
    priority: 'Normal',
    note: "Friend's birthday is on 29th",
    isCarriedOver: false,
    isRecurring: false,
    checklist: [],
    reminders: [],
  },
  {
    id: uuid.v4() as string,
    title: 'Organize digital photos',
    isCompleted: false,
    category: 'Recreation',
    dueDate: new Date('2024-05-29'),
    priority: 'Low',
    note: 'Create folders by year',
    isCarriedOver: false,
    isRecurring: false,
    checklist: [
      { id: uuid.v4() as string, title: 'Sort by date', isCompleted: false },
      { id: uuid.v4() as string, title: 'Delete duplicates', isCompleted: false },
    ],
    reminders: [],
  },
];

const dummyHabits: Habit[] = [
  {
    category: 'Task',
    endDate: undefined,
    frequency: { type: 'daily' },
    id: '475d60e8-12fa-49c2-8d6f-44f64cf1fec1',
    note: 'lorem ipsum',
    priority: 'Normal',
    reminders: [
      {
        id: '266666aa-5781-468a-844f-4116744892d0',
        time: new Date('2024-07-02T07:00:00.000Z'),
        type: 'notification',
      },
    ],
    startDate: new Date('2024-07-02T07:49:59.672Z'),
    title: 'Test 1',
  },
  {
    category: 'Finance',
    endDate: new Date('2024-07-31T07:55:00.000Z'),
    frequency: { isRepeatedOn: ['Monday', 'Wednesday', 'Friday'], type: 'specific' },
    id: '144daac9-07dd-4560-ae8e-a1cd6de8007a',
    note: '',
    priority: 'High',
    reminders: [],
    startDate: new Date('2024-07-02T07:49:59.672Z'),
    title: 'Test 2',
  },
  {
    category: 'Health',
    endDate: undefined,
    frequency: { isRepeatedEvery: 2, type: 'repeats' },
    id: '788d33ec-f638-4ae9-bf0c-ea67073f6600',
    note: 'the thing goes skrrrra',
    priority: 'Low',
    reminders: [],
    startDate: new Date('2024-07-02T07:49:59.672Z'),
    title: 'Test 3',
  },
];

export const categoryArray = [
  'Task',
  'Quit',
  'Art',
  'Meditation',
  'Study',
  'Sports',
  'Recreation',
  'Social',
  'Finance',
  'Health',
  'Work',
  'Nutrition',
  'Home',
  'Outdoor',
  'Other',
] as const;

const useAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  setAuthUser: (authUser) => set((state) => ({ ...state, authUser })),
}));

const useTaskStore = create<TaskStore>((set) => ({
  tasks: dummyTasks,
  searchQuery: '',
  selectedDate: TODAYS_DATE,
  setTasks: (tasks) => set((state) => ({ ...state, tasks })),
  setSearchQuery: (searchQuery) => set((state) => ({ ...state, searchQuery })),
  setSelectedDate: (selectedDate) => set((state) => ({ ...state, selectedDate })),
}));

const useHabitStore = create<HabitStore>((set) => ({
  habits: dummyHabits,
  setHabits: (habits) => set((state) => ({ ...state, habits })),
}));

export { useAuthStore, useTaskStore, useHabitStore };
