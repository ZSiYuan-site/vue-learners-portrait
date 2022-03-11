import {
    // getCourseCategory,
    getAllCoursesInfo,
    getAllMajorsInfo,
    getMajorDetailInfo
} from '../api/index';

import {
    // SAVE_COURSE_CATEGORY,
    SAVE_ALL_COURSES_INFO,
    SAVE_ALL_MAJORS_INFO,
    SAVE_MAJOR_DETAIL_INFO
} from './mutations_type'

export default {
    // action异步函数接收的参数是commit对象，下面是解构出来
    // async getCourseCategoryAction({
    //     commit
    // }) {
    //     let result = await getCourseCategory()
    //     commit(SAVE_COURSE_CATEGORY, result.children)
    // },

    // 所有课程
    async getAllCoursesInfoAction({
        commit
    }) {
        let result = await getAllCoursesInfo()
        // 分割课程数组并且合并
        let allCourseLists = [] //合并完成后的每个小课程
        result.children.forEach((courseItem, index) => {
            courseItem.children.forEach((courseDetailItem, index) => {
                allCourseLists.push(courseDetailItem)
            })
        });
        console.log(allCourseLists)
        commit(SAVE_ALL_COURSES_INFO, [result.children, allCourseLists])
    },


    // 所有专业
    async getAllMajorsInfoAction({
        commit
    }) {
        let result = await getAllMajorsInfo()
        commit(SAVE_ALL_MAJORS_INFO, result.data)
    },

    // 具体的专业信息
    async getMajorDetailInfoAction({
        commit
    }) {
        let result = await getMajorDetailInfo()
        commit(SAVE_MAJOR_DETAIL_INFO, result.data)
    },

}