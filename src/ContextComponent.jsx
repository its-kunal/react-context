import { useContext, createContext } from 'react'

// Creating a react context
export const Context = createContext()

// Bonus Tip
// Creating a react hook
export const useContextComponent = () => {
    return useContext(Context)
}

// Context Component
export default function ContextComponent({ children }) {
    const value = {
        theme: {
            mode: "dark",
            colors: {
                primary: "blue",
                secondary: "purple",
                success: "green",
                danger: "red",
                warning: "yellow"
            }
        }
    }
    return (
        // Context Component Provider
        <Context.Provider
            // here you'll need to pass a value
            value={value}>

            {children}

        </Context.Provider>
    )
}
