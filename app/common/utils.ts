import { useRef, useState } from 'react'

export const useDelayedState = <Value>(initial: Value, delay: number) => {
    const [buffer, setBuffer] = useState(initial)
    const [state, setState] = useState(initial)
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
    const setter = (value: Value) => {
        setBuffer(value)
        clearTimeout(timer.current)
        timer.current = setTimeout(() => setState(value), delay)
    }
    return [buffer, state, setter] as const
}
