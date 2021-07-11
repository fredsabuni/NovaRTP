let scrollpos = window.scrollY
const header = document.querySelector("nav")

const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("bg-light")
const remove_class_on_scroll = () => header.classList.remove("bg-transparent")
const remove_class_on_scroll_back = () => header.classList.remove("bg-light")
const add_class_on_scroll_back = () => header.classList.add("bg-transparent")

const add_light_class_on_scroll = () => header.classList.add("navbar-light")
const remove_light_class_on_scroll = () => header.classList.remove("navbar-light")
const remove_dark_class_on_scroll_back = () => header.classList.remove("navbar-dark")
const add_dark_class_on_scroll_back = () => header.classList.add("navbar-dark")

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= 80) {

        add_class_on_scroll();
        add_light_class_on_scroll()

        remove_class_on_scroll()
        remove_dark_class_on_scroll_back()


    }

    if (scrollpos < 80) {


        add_class_on_scroll_back()
        add_dark_class_on_scroll_back()
        remove_class_on_scroll_back()
        remove_light_class_on_scroll()



    }



})