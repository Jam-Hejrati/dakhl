import { atom } from 'jotai'

type TThemeMode = 'light' | 'dark'

export const themeMode = atom<TThemeMode>('light')