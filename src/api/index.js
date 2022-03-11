import myAxios from './myAxios'

// 获取课程列表
// export const getCourseCategory = () => myAxios({
//     url: '/course/coursecate/list'
// })

// 测试mock
// export const test2 = () => myAxios('/test2')

// 获取所有课程
export const getAllCoursesInfo = () => myAxios({
    url: '/allCourseInfo'
})


// 获取所有专业信息
export const getAllMajorsInfo = () => myAxios({
    url: '/allMajorInfo'
})

// 具体的专业信息
export const getMajorDetailInfo = () => myAxios({
    url: '/majorDetailInfo'
})

// 新增评论
export const reqAddComment = (content, userId, nickName, courseId) => myAxios.post('/addComment', {
    content,
    userId,
    nickName,
    courseId
})

