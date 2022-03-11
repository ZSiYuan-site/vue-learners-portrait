import Mock from 'mockjs'

import allMajorsInfo from './allMajorsInfo.json'
import allCoursesInfo from './allCoursesInfo.json'
import majorDetailInfo from './majorDetailInfo.json'
import addComment from './addComment.json';

// mock()  
// 参数一：要拦截的请求的地址
// mock 测试
// Mock.mock('/api/test2', 123)


// 所有课程
Mock.mock('/api/allCourseInfo', allCoursesInfo)

// 所有专业信息
Mock.mock('/api/allMajorInfo', allMajorsInfo)

// 具体的专业信息
Mock.mock('/api/majorDetailInfo', majorDetailInfo)

// 新增评论
Mock.mock('api/addComment',addComment)