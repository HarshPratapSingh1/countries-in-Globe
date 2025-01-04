import { createContext, useState } from "react";

export const Theme = createContext()

export function ThemeProvider({ children }) {
    const [isDark,setDark] = useState(
      JSON.parse(localStorage.getItem('isDark'))
    )
  
    return (
      <Theme.Provider value={[isDark, setDark]}>
        {children}
      </Theme.Provider>
    )
  }