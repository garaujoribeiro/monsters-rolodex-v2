import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { getData } from './utils/data';
import { URL_API } from './utils/constants';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { Users } from './utils/types'
import './App.css';
import React from 'react';

const App = () => {


  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Users[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  /* 
  * Fazer o fetch dos usuarios usando a função auxiliadora de tipagem
  */
  const fetchUsers = useCallback(async () => {
    const users = await getData<Users[]>(URL_API);
    setMonsters(users);
  }, [setMonsters])

  /*
  * Fazer a filtragem dos usuários através do campo de texto
  */
  const filterUsers = useCallback((): void => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [setFilterMonsters, monsters, searchField])

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    filterUsers()
  }, [filterUsers]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
