import React, { useContext } from 'react'
import { useContextComponent, Context } from './ContextComponent'

export default function App() {
  // Bonus Tip
  const value = useContextComponent()
  // const value = useContext(Context)

  return (
    <div>
      {value.theme.mode}
      <ul>
        <li>primary -&gt; {value.theme.colors.primary}</li>
        <li>secondary -&gt; {value.theme.colors.secondary}</li>
        <li>warning -&gt; {value.theme.colors.warning}</li>
        <li>danger -&gt; {value.theme.colors.danger}</li>
      </ul>
    </div>
  )
}
