import { TableColumn } from "react-data-table-component";

export interface IPerson {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: string[],
  species: string[],
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
export const columns: TableColumn<IPerson>[] = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Height",
    selector: (row) => row.height,
    sortable: true,
  },
  {
    name: "Birth year",
    selector: (row) => row.birth_year,
    sortable: true,
  },
  {
    name: "Gender",
    selector: (row) => row.gender,
    sortable: true,
  },
  {
    name: "Created",
    selector: (row) => row.created,
    sortable: true,
  },
];
