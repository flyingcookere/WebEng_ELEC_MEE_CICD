import { useNavigate } from "react-router-dom";
import {
  DEPARTMENT_CATALOG,
  DEPT_CODES,
  type DeptCode,
} from "../lib/departmentData";

const departments = DEPT_CODES.map((code: DeptCode) => ({
  code,
  name: DEPARTMENT_CATALOG[code].name,
}));

export 
