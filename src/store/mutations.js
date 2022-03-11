import {
    // SAVE_COURSE_CATEGORY,
    SAVE_ALL_COURSES_INFO,
    SAVE_ALL_MAJORS_INFO,
    SAVE_MAJOR_DETAIL_INFO
} from './mutations_type'

export default {
    // [SAVE_COURSE_CATEGORY](state, courseCategory) {
    //     state.courseCategory = courseCategory
    // },

    // 所有课程
    [SAVE_ALL_COURSES_INFO](state, array) {
        state.allCoursesInfo = array[0]
        state.allCourseLists = array[1]
    },

    // 所有专业
    [SAVE_ALL_MAJORS_INFO](state, allMajorsInfo) {
        state.allMajorsInfo = allMajorsInfo
    },

     // 具体的专业信息
     [SAVE_MAJOR_DETAIL_INFO](state, majorDetailInfo) {
        state.majorDetailInfo = majorDetailInfo
    }
}