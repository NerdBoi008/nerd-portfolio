import { Geist, Homenaje, } from "next/font/google";

export const fontPrimary = Geist({
    subsets: ['latin'],
    variable: '--font-geist',
    display: 'swap',
    weight: "400"
})

export const fontSecondary = Homenaje({
    subsets: ['latin'],
    variable: '--font-homenaje',
    display: 'swap',
    weight: "400"
})