import type { User } from '../types';

// Hardcoded users
export const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    name: 'Administrator'
  },
  {
    id: '2',
    username: 'user',
    password: 'user123',
    name: 'Test User'
  },
  {
    id: '3',
    username: 'demo',
    password: 'demo123',
    name: 'Demo User'
  }
];
