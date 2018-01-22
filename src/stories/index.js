import React from 'react';

import { storiesOf } from '@storybook/react';
import People  from '../components/People';
import PeopleList from '../components/PeopleList';
import PeopleView from '../components/PeopleView';

const people = {name: "nameofp"};
const people1 = {name: "nameofp1"};
const peopleL = [people, people1];

storiesOf('Test', module)
  .add('People', () => <People people={people}/>)
  .add('People List', () => <PeopleList peopleL={peopleL}/>)
  .add('People View laoding', () => <PeopleView loading={true}/>)
  .add('People View error', () => <PeopleView loading={false} error="Error loading"/>)
  .add('People View data', () => <PeopleView loading={false} peopleL={peopleL}/>)

