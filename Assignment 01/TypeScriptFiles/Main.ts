import { Data } from "./Data";
import { DataFetcher } from "./DataFetcher";

import { Observer } from "./Observer";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

const data=new Data()
const student1:DataFetcher=new Student()
const teacher1:DataFetcher=new Teacher()

data.registerObserver(student1)
data.measuredChanged("SWE-4501", "Observer Pattern", "ABC",new Date())