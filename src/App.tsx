import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Page } from './components/page/Page';
import { ArrowUp } from '@phosphor-icons/react';
import DataTable from 'react-data-table-component';
import { IPerson, columns } from './utils';

function App() {
  const [data, setData] = useState<IPerson[]>([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAllPeople = async (page: number, limit: number, search: string) => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people/?page=${page}${search ? '&search=' + search : ''}`).then(res => res.json()).then(res => { setTotal(res.count); setData(res.results); setLoading(false); });
  }


  useEffect(() => {
    fetchAllPeople(page, limit, search);
  }, []);

  const handleSort = () => {

  };

  const handlePerRowsChange = () => {

  };

  const handlePageChange = (numPage: number) => {
    setPage(numPage);
    fetchAllPeople(numPage, limit, search);
  };

  const handleChangeSearch = (key: string) => {
    setSearch(key);
    setPage(1);
    fetchAllPeople(1, limit, key);
  }

  return (
    <Page
      title={"Star War People"} className={"StarWarPage"}
      // onChangeSearch={(e) => handleChangeSearch(e.target.value)}
      onBlurSearch={(e) => handleChangeSearch(e.target.value)}
      loading={loading}
    >
      <DataTable
        columns={columns}
        data={data}
        onSort={handleSort}
        className="StarWarPage__dataTable"
        dense
        pagination
        paginationServer
        paginationTotalRows={total}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        sortIcon={<ArrowUp size={32} weight="fill" />}
      />
    </Page >
  );
}

export default App;
