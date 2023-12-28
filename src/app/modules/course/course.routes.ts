import { Router } from 'express'
import { CourseController } from './course.controller'
import { requestValidation } from '../../utils/requestValidation'
import { courseValidation, updateCourseValidation } from './course.validationt'
import { auth } from '../../utils/auth'
import { authOptions } from '../user/user.utils'
// Course Routes
export const CourseRoutes = Router()

CourseRoutes.post(
  '/',
  auth(authOptions.ADMIN),
  requestValidation(courseValidation),
  CourseController.createCourse,
)
CourseRoutes.get('/best', CourseController.bestCourseWithRating)

// Courses Routes
export const CoursesRoutes = Router()

CoursesRoutes.get('/', CourseController.getCourses)
CoursesRoutes.put(
  '/:courseId',
  requestValidation(updateCourseValidation),
  CourseController.updateCourse,
)
CoursesRoutes.get('/:courseId/reviews', CourseController.courseWithReviews)
