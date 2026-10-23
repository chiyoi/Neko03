import { useState } from 'react'
import ReactLatex from 'react-latex-next'
import { Text, Heading, TextArea, Card } from '@radix-ui/themes'


export default function Latex() {
    const [formula, setFormula] = useState('')
    return (
        <Card m='3'>
            <Heading>LaTeX</Heading>
            <TextArea autoFocus mt='3' size='3' placeholder='Input formula...' value={formula} onChange={
                e => setFormula(e.target.value)
            } />
            <Text mt='3'>
                <ReactLatex>{formula}</ReactLatex>
            </Text>
        </Card>
    )
}
