import {Provider} from 'react-redux';
import './App.css'
import store from './Store/store';
import {Container,Typography} from '@mui/material'
import AddHabitForm from './Components/AddHabitForm';
import HabitList from './Components/HabitList';
import HabitStats from './Components/HabitStats';

function App() {
  return (
   <Provider store={store}>
    <Container maxWidth="md">
      <Typography component ="h1" variant="h2" align="center">Habit Tracker</Typography>
      <AddHabitForm/>
      <HabitList/>
      <HabitStats/>
    </Container>
    </Provider>
  )
}

export default App;
