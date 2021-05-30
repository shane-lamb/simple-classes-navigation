import { createClassesNavigation } from "./mapping";
import { mockSchoolsWithClasses } from "./mock";

const output = (el: any) => JSON.stringify(el, null, 2);

console.log("Create classes navigation", output(mockSchoolsWithClasses));
console.log("Result", output(createClassesNavigation(mockSchoolsWithClasses)));
