export interface SchoolEvent {
  date: string;
  title: string;
  type: "holiday" | "academic" | "activity";
}

export const ACADEMIC_EVENTS: SchoolEvent[] = [
  { date: "2026-01-02", title: "Winter Solstice (Nyilo)", type: "holiday" },
  { date: "2026-01-19", title: "Traditional Day of Offerings", type: "holiday" },
  { date: "2026-02-05", title: "Birth Anniversary of HRH Gyalsey", type: "holiday" },
  { date: "2026-02-10", title: "Reporting of Teachers", type: "academic" },
  { date: "2026-02-15", title: "Reporting of Boarder Students (X & XII)", type: "academic" },
  { date: "2026-02-16", title: "Reporting of Day Scholars (X & XII)", type: "academic" },
  { date: "2026-02-18", title: "Losar (New Year)", type: "holiday" },
  { date: "2026-02-22", title: "His Majesty's Birth Anniversary", type: "holiday" },
  { date: "2026-03-02", title: "Reporting of Class XI Students", type: "academic" },
  { date: "2026-03-04", title: "Mentoring Session Starts", type: "academic" },
  { date: "2026-03-07", title: "SAP Activities: Sowing & Plantation", type: "activity" },
  { date: "2026-03-09", title: "Inter-House Games Competition", type: "activity" },
  { date: "2026-04-02", title: "World Autism Awareness Day", type: "activity" },
  { date: "2026-04-03", title: "Inter-House Games End", type: "activity" },
  { date: "2026-04-07", title: "World Health Day", type: "activity" },
  { date: "2026-04-08", title: "108 Learning Experience Showcase", type: "academic" },
  { date: "2026-04-10", title: "English Poetry Recitation", type: "activity" },
  { date: "2026-04-13", title: "Unit Test I Begins", type: "academic" },
  { date: "2026-04-17", title: "Closure to Learning Cycle I", type: "academic" },
  { date: "2026-04-26", title: "Zhabdrung Kuchhoe", type: "holiday" },
  { date: "2026-04-29", title: "Unit Test Result Declaration", type: "academic" },
  { date: "2026-05-02", title: "Birth Anniversary of Third Druk Gyalpo & Teachers Day", type: "holiday" },
  { date: "2026-05-15", title: "STEAM Exhibition", type: "activity" },
  { date: "2026-05-18", title: "Academic Month (Term I) Starts", type: "academic" },
  { date: "2026-05-28", title: "Menstrual Hygiene Day", type: "activity" },
  { date: "2026-05-30", title: "Annual School Marathon", type: "activity" },
  { date: "2026-05-31", title: "Lord Buddha's Parinirvana", type: "holiday" },
  { date: "2026-06-02", title: "Coronation of Fifth Druk Gyalpo", type: "holiday" },
  { date: "2026-06-15", title: "Mid-Term Exam Starts", type: "academic" },
  { date: "2026-08-12", title: "International Youth Day", type: "activity" },
  { date: "2026-09-07", title: "Unit Test II Begins", type: "academic" },
  { date: "2026-10-12", title: "Trial Exam Begins", type: "academic" },
  { date: "2026-11-12", title: "Annual Examination Begins", type: "academic" },
  { date: "2026-12-01", title: "Board Examination Begins", type: "academic" },
  { date: "2026-12-17", title: "National Day", type: "holiday" },
];
