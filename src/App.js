import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
    return (
        <Router>
            <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                <Switch>
                    <Route path="/login" component={LandingPage} />
                    <Route path="/tasks" component={TaskList} />
                    <Route path="/add-task" component={AddTask} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
