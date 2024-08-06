// Home Page Card Item Data 
const cardItemsData =[
    {
        title: "Smooth Scroll",
        discription: "Smooth Scroll using useRef Hooks",
        goToPageText: "Go To Page",
        goToPageLink: "/smoothScroll",
    },

    {
        title: "Material UI",
        discription: "Material UI is an open-source React component library that implements Google's Material Design.",
        goToPageText: "Go To Page",
        goToPageLink: "/materialui",
    },

    {
        title: "Data Component",
        discription: "Export Default And Export Name , use the Array of data in Data component and organize the code ",
        goToPageText: "Go To Page",
        goToPageLink: "/exportdefaultandexportname",
    },
    {
        title: "Modal",
        discription: "Modal Using useState",
        goToPageText: "Go To Page",
        goToPageLink: "/modal",
    },
    {
        title: "404",
        discription: "404 , Navigate Link",
        goToPageText: "Go To Page",
        goToPageLink: "/modal",
    },
];

// Form Page Input Box Data 

const inputBox =[
    {
        labelName:'First Name',
        inputType:'text',
        placeholder:'First Name',
        className:'fN'
    },
    {
        labelName:'Last Name',
        inputType:'text',
        placeholder:'Last Name',
        className:'lastN'
    },
    {
        labelName:'Password',
        inputType:'password',
        placeholder:'Password',
        className:'password'
    },
    {
        labelName:'Email Id',
        inputType:'text',
        placeholder:'Email Id',
        className:'emailId'
    },
    {
        labelName:'Phone Number*',
        inputType:'tel',
        placeholder:'Enter Phone No.',
        className:'phNumber'
    },
];

// Footer Component Footer li Data 
const itemOne = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Holidays',
        href: '/holiday'
    },
    {
        label: 'Technology',
        href: '/technology'
    },
    {
        label: 'Servicess ass',
        href: '/'
    },
    {
        label: 'Technologies',
        href: '/'
    },
];

const itemTwo = [
    {
        label: 'Array / Object destructuring ',
        href: '/form',
    },
    {
        label: 'Lorem ipsum dolor sit amet.',
        href: '/holiday',
    },
    {
        label: 'Lorem ipsum dolor sit',
        href: '/technology',
    },
    {
        label: 'Technologies',
        href: '/nolog',
    },
];

const itemThird = [
    {
        label: 'Lorem ipsum dolor sit amet.',
        href: '/',
    },
    {
        label: 'Lorem ipsum dolor sit amet.',
        href: '/holiday',
    },
    {
        label: 'Lorem ipsum dolor sit',
        href: '/technology',
    },
    {
        label: 'Technologies',
        href: '/',
    },
];

export {cardItemsData, inputBox, itemOne, itemTwo, itemThird}