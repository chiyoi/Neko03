import '@radix-ui/themes/styles.css'
import 'katex/dist/katex.min.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes'

import './main.css'
import App from './App.tsx'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider attribute='class'>
            <Theme accentColor='pink' hasBackground={false}>
                <App />
            </Theme>
        </ThemeProvider>
    </StrictMode>
)
