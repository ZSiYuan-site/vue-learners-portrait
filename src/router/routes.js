import Home from '../views/home/Home.vue'
import Major from '../views/major/Major.vue'
import Course from '../views/course/Course.vue'
import Exercise from '../views/exercise/Exercise.vue'
import Blog from '../views/blog/Blog.vue'
import Ability from '../views/ability/Ability.vue'
import Login from '../views/login/Login.vue'
import User from '../views/user/User.vue'
import Teacher from '../views/teacher/Teacher.vue'
import CourseDetail from '../components/course_detail/CourseDetail.vue'
import CourseIntroduce from '../components/course_introduce/CourseIntroduce.vue';
import Contact from '../views/contact/Contact.vue'
import MajorDetail from '../components/major_datail/MajorDetail.vue'
import ConsultDetail from '../components/consult_detail/ConsultDetail.vue'
import ShopCart from '../components/shop_cart/ShopCart.vue';
import Schedule from '../views/user/schedule/Schedule.vue'
import Order from '../views/user/order/Order.vue'
import Card from '../views/user/card/Card.vue'
import Test from '../views/test/Test.vue'

export default [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            isShowNav: true,
            keepAlive: false
        }
    }, {
        path: '/major',
        component: Major,
        meta: {
            isShowNav: true
        }
    }, {
        path: '/major/consult_detail',
        component: ConsultDetail
    },
    {
        path: '/major/major_detail',
        component: MajorDetail
    },
    {
        path: '/course',
        component: Course,
        meta: {
            isShowNav: true
        },
    },
    {
        path: '/shop_cart',
        component: ShopCart,
        meta: {
            isShowNav: true
        },
    },
    {
        path: '/teacher',
        component: Teacher,
        meta: {
            isShowNav: true
        },
    },
    {
        path: '/course/course_introduce',
        component: CourseIntroduce
    },
    {
        path: '/course/course_detail',
        component: CourseDetail
    },
    {
        path: '/exercise',
        component: Exercise,
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/blog',
        component: Blog,
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/ability',
        component: Ability,
        meta: {
            isShowNav: true
        }
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/user',
        component: User,
        children: [{
            path: '/user',
            redirect: '/user/order'
        }, {
            // 子路由写法一
            path: '/user/schedule',
            component: Schedule
        }, {
            // 子路由写法二
            path: 'order',
            component: Order
        }, {
            path: 'card',
            component: Card
        }]
    }, {
        path: '/test',
        component: Test
    }
]