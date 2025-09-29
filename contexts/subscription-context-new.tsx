'use client'
import React, { createContext, useContext, ReactNode } from 'react'

interface SubscriptionContextType {
  subscription: any | null
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  subscription: null
})

export const useSubscription = () => useContext(SubscriptionContext)

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  return (
    <SubscriptionContext.Provider value={{ subscription: null }}>
      {children}
    </SubscriptionContext.Provider>
  )
}