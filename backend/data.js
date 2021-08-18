import bcrypt from 'bcryptjs'

export const products = [
    {
        id:'1',
        name:'T-Shart man',
        brand:'nick',
        dice:'Quality T-shart ',
        price:250,
        reviwe:'50',
        ratting:'4.5',
        stok:120,
        image:'/images/p1.jpg'
    },
    {
        id:'2',
        name:'T-Shart man',
        brand:'nick',
        dice:'Quality T-shart ',
        price:250,
        reviwe:'50',
        ratting:'4.5',
        stok:0,
        image:'/images/p1.jpg'
    },
    {
        id:'3',
        name:'T-Shart man',
        brand:'nick',
        dice:'Quality T-shart ',
        price:250,
        reviwe:'50',
        ratting:'2.2',
        stok:120,
        image:'/images/p1.jpg'
    },
    {
        id:'4',
        name:'T-Shart man',
        brand:'nick',
        dice:'Quality T-shart ',
        price:250,
        reviwe:'50',
        ratting:'4.5',
        stok:120,
        image:'/images/p1.jpg'
    },
    {
        id:'5',
        name:'T-Shart man',
        brand:'nick',
        dice:'Quality T-shart ',
        price:250,
        reviwe:'50',
        ratting:'4.5',
        stok:120,
        image:'/images/p1.jpg'
    },
    {
        id:'6',
        name:'T-Shart man',
        brand:'nick',
        dice:'Quality T-shart ',
        price:250,
        reviwe:'50',
        ratting:'4.5',
        stok:120,
        image:'/images/p1.jpg'
    },
    {
        id:'7',
        name:'T-Shart man',
        brand:'nick',
        dice:'Quality T-shart ',
        price:250,
        reviwe:'50',
        ratting:4.5,
        stok:'120',
        image:'/images/p1.jpg'
    }
]

export const users = [
    {
        name:'asif',
        email:'asif@asif.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin:true,
    },
    {
        name:'jone',
        email:'jone@asif.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin:false,
    }
]