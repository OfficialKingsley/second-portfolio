interface Filter {
  label: string;
  isChecked: boolean;
}

const filters: Filter[] = [
  { label: "all", isChecked: true },
  { label: "frontend", isChecked: false },
  { label: "backend", isChecked: false },
  { label: "fullstack", isChecked: false },
];
export default filters;
