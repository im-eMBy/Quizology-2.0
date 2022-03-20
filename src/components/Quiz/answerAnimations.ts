import { gsap } from "gsap";

export const correctAnimation = (element: HTMLElement) => {
    gsap.fromTo(element.style, { transform: 'scale(1.2)' }, { background: 'linear-gradient(135deg, #219556 60%, #17c265 100%)', transform: 'scale(1)', duration: 0.6 })
    return new Promise((res) => {
        setTimeout(res, 2000)
    })
}
export const incorrectAnimation = (element: HTMLElement) => {
    gsap.fromTo(element.style, { transform: 'scale(0.8)' }, { background: 'linear-gradient(135deg, #923027 60%, #d62717 100%)', transform: 'scale(1)', duration: 0.6 })
    return new Promise((res) => {
        setTimeout(res, 2000)
    })
}