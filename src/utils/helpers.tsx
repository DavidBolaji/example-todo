import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

export const getTodos = (key: string) => {
  const todos = localStorage.getItem(key)
  if (!todos) return []
  return JSON.parse(todos)
} 
  
