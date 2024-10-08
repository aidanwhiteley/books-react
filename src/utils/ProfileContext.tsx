import { createContext } from 'react';
import { UserProfile } from '../apis/HttpDataApis';

export const profileContext = createContext<UserProfile | null>(null);