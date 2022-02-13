import { gsap } from "gsap";

export const correctAnimation = (element: HTMLElement) => {
    gsap.fromTo(element.style, { transform: 'scale(1.2)' }, { backgroundColor: '#498467', transform: 'scale(1)', duration: 0.6 })
    return new Promise((res) => {
        setTimeout(res, 2000)
    })
}
export const incorrectAnimation = (element: HTMLElement) => {
    gsap.fromTo(element.style, { transform: 'scale(0.8)' }, { backgroundColor: '#F2545B', transform: 'scale(1)', duration: 0.6 })
    return new Promise((res) => {
        setTimeout(res, 2000)
    })
}