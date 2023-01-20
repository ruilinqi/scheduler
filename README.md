# Interview Scheduler

Interview Scheduler is a single page application (SPA), built using React. Users are allowed to view, create, edit, and cancel interviews with interviewers. All changes are persisted in real time.

## Features
- View available spots from Monday to Friday, from 12pm to 5pm
- Book an interview in an empty appointment slot
  - Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers
- Edit or cancel an existing interview
  - Existing interviews can be edited with student name and interviewer
  - Existing interviews can be canceled
  - A confirmation is presented when a user attempt to cancel an interview.
  - A status indicator with "Saving" or "Deleting" is shown while an interview is saved or cancelled.
  - Available spots update instantly
- Data is loaded and persisted in real time

## Final Product
Interviews List

!["Screenshot of Interviews List"](https://github.com/ruilinqi/scheduler/blob/master/docs/Interviews_List.png)

!["Screenshot of Interviews List on Other Days"](https://github.com/ruilinqi/scheduler/blob/master/docs/Interviews_List_On_Other_days.png)

Book an interview

!["Screenshot of Book an Interview"](https://github.com/ruilinqi/scheduler/blob/master/docs/Book_an_Interview.png)

An Interview Appointment Completed

!["Screenshot of Interviews List"](https://github.com/ruilinqi/scheduler/blob/master/docs/Interview_Appointment_Completed.png)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
