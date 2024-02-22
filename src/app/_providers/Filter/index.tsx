'use client'

import { createContext, SetStateAction, useContext, useState } from 'react'

export const INITIAL_FILTER_DATA = {
  categoryFilters: [],
  setCategoryFilters: () => [],
  sort: '',
  setSort: () => '',
}

interface IContextType {
  categoryFilters: string[]
  setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
  sort: string
  setSort: React.Dispatch<SetStateAction<string>>
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const useFilter = () => useContext(FilterContext)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState([])
  const [sort, setSort] = useState('-createdAt')

  const value = {
    categoryFilters,
    setCategoryFilters,
    sort,
    setSort,
  }

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
}
