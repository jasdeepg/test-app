'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export function EmbeddedComponentComponent() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Embedded Component</h2>
      <p className="mb-4">This is a sample component embedded in the dashboard.</p>
      <p className="text-xl mb-4">Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  )
}