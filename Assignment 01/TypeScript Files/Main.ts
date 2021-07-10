import { Fetcher } from "./DataFetcher";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Data } from "./Data";

const data = new Data();

const teacher = new Teacher();
const student = new Student();

const fetcher=new Fetcher(data, [teacher, student]);

data.showData("SWE 4501", "Observer Pattern", "Nazmul Haque sir", new Date(Date.now() - 86400000));
fetcher.fetchData();
student.displayData();
teacher.displayData();
