import { departments } from "../data/department";

export type DepartmentData = (typeof departments)[keyof typeof departments];
