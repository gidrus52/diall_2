export default {
    async bind(el, binding, vnode) {
        vnode.elm.childNodes[0].classList.add('active')
        vnode.context.$on('mousetrapped', async (data) => {
            vnode.elm.childNodes.forEach((element, index) => {
                index === data  ? element.classList.add('active') : element.classList.remove('active')
            })
        })

    }
}